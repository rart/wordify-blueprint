/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package org.craftercms.sites.wordify

import org.apache.commons.lang3.StringUtils
import org.craftercms.engine.service.UrlTransformationService
import org.elasticsearch.action.search.SearchRequest
import org.elasticsearch.index.query.QueryBuilders
import org.elasticsearch.search.builder.SearchSourceBuilder
import org.elasticsearch.search.sort.FieldSortBuilder
import org.elasticsearch.search.sort.SortOrder

class SearchHelper {
  static final String POST_CONTENT_TYPE_QUERY = "content-type:\"/page/post\""
  static final String[] HIGHLIGHT_FIELDS = ["pageTitle_s", "pageDescription_s", "authorBio_o"]
  static final int DEFAULT_START = 0
  static final int DEFAULT_ROWS = 10

  def elasticsearch
  UrlTransformationService urlTransformationService

  SearchHelper(elasticsearch, UrlTransformationService urlTransformationService) {
    this.elasticsearch = elasticsearch
    this.urlTransformationService = urlTransformationService
  }

  def search(userTerm, start = DEFAULT_START, rows = DEFAULT_ROWS) {
    def q = "${POST_CONTENT_TYPE_QUERY}"

    if (userTerm) {
      if(!userTerm.contains(" ")) {
        userTerm = "${userTerm}~1 OR *${userTerm}"
      }
      def userTermQuery = "(pageTitle_s:(${userTerm}) OR pageDescription_s:(${userTerm}))"

      q = "${q} AND ${userTermQuery}"
    }

    def highlighter = SearchSourceBuilder.highlight()
    HIGHLIGHT_FIELDS.each{ field -> highlighter.field(field) }

    def builder = new SearchSourceBuilder()
      .query(QueryBuilders.queryStringQuery(q))
      .from(start)
      .size(rows)
      .highlighter(highlighter)

    def result = elasticsearch.search(new SearchRequest().source(builder))

    if (result) {
      return processUserSearchResults(result)
    } else {
      return []
    }
  }

  def searchPosts(categories, start = DEFAULT_START, rows = DEFAULT_ROWS, exclude = null) {
    def q = "${POST_CONTENT_TYPE_QUERY}"

    if (categories) {
      def categoriesQuery = getFieldQueryWithMultipleValues("categories_o.item.key", categories)
      q = "${q} AND ${categoriesQuery}"
    }

    if(exclude) {
      q = "${q} AND NOT objectId:\"${exclude}\""
    }

    def builder = new SearchSourceBuilder()
      .query(QueryBuilders.queryStringQuery(q))
      .from(start)
      .size(rows)
      .sort(new FieldSortBuilder("lastModifiedDate_dt").order(SortOrder.DESC))

    def result = elasticsearch.search(new SearchRequest().source(builder))

    if (result) {
      return processPostListingResults(result)
    } else {
      return []
    }
  }

  private def processUserSearchResults(result) {
    def posts = []
    def hits = result.hits.hits

    if (hits) {
      hits.each {hit ->
        def doc = hit.getSourceAsMap()
        def post = [:]
        post.title = doc.title_t
        post.url = urlTransformationService.transform("storeUrlToRenderUrl", doc.localId)
        post.headline = doc.headline_s
        post.mainImage = doc.mainImage_s
        post.blurb = doc.blurb_t
        post.content = doc.content_o
        post.authorBio = doc.authorBio_o
        post.categories = doc.categories_o
        post.tags = doc.tags_o

        if (hit.highlightFields) {
          def articleHighlights = hit.highlightFields.values()*.getFragments().flatten()*.string()
          if (articleHighlights) {
            def highlightValues = []

            articleHighlights.each { value ->
              highlightValues << value
            }

            post.highlight = StringUtils.join(highlightValues, "... ")
            post.highlight = StringUtils.strip(article.highlight)
          }
        }

        posts << post
      }
    }

    return posts
  }

  private def processPostListingResults(result) {
    def posts = []
    def documents = result.hits.hits*.getSourceAsMap()

    if (documents) {
      documents.each {doc ->
        def post = [:]
        post.headline = doc.headline_s
        post.mainImage = doc.mainImage_s
        post.blurb = doc.blurb_t
        post.content = doc.content_o
        post.authorBio = doc.authorBio_o
        post.categories = doc.categories_o
        post.tags = doc.tags_o
        post.url = urlTransformationService.transform("storeUrlToRenderUrl", doc.localId)
        post.lastModifiedDate = doc.lastModifiedDate

        posts << post
      }
    }

    return posts
  }

  private def getFieldQueryWithMultipleValues(field, values) {
    if (values.class.isArray()) {
      values = values as List
    }

    if (values instanceof Iterable) {
      values = "(" + StringUtils.join((Iterable)values, " OR ") + ")"
    } else {
      values = "\"${values}\""
    }

    return "${field}:${values}"
  }

}