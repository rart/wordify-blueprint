import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../content.service';
import { parseDescriptor } from '@craftercms/content';
import { ContentInstance } from '@craftercms/models';

@Component({
  selector: 'app-dynamic-route',
  templateUrl: './dynamic-route.component.html',
  styleUrls: ['./dynamic-route.component.scss']
})
export class DynamicRouteComponent implements OnInit {
  constructor(private router: Router, private contentService: ContentService) {}
  private url: string = this.getUrlWithoutParams();
  public state;
  public contentTypeId;

  ngOnInit(): void {
    this.contentService.getPageData(this.url, {
      includePosts: true,
      postsLimit: 3,
      postsOffset: 0
    })
      .subscribe(({ data }) => {
        const model = parseDescriptor(data.content.items?.[0]) as ContentInstance;
        const posts = parseDescriptor(data.posts.items);
        this.contentTypeId = model.craftercms.contentTypeId;
        this.state = {
          model,
          posts,
          meta: {
            posts: {
              total: data.posts.total,
              limit: 3,
              offset: 0
            }
          }
        };
      });
  }

  getUrlWithoutParams() {
    let urlTree = this.router.parseUrl(this.router.url);
    urlTree.queryParams = {};
    return urlTree.toString();
  }

}
