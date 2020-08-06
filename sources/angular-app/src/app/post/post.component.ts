import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() state;
  public mainImage_s;
  public headline_s;
  public posts_o = [];
  public bios_o;
  public dateCreated;
  public profilePic_s;
  public name_s;
  public path;
  public categories_o = [];
  public tags_o = [];
  public paginationData;
  public content_o;

  constructor(private contentService: ContentService) {
  }

  getPosts(): void {
    this.contentService.getPosts(
      this.categories_o,
      this.tags_o,
      this.path,
      this.paginationData
    )
      .subscribe(response => {
        this.posts_o = response.items;
        this.paginationData.pageCount = response.pageCount;
      });
  }

  onPageChange(page: number) {
    this.paginationData.currentPage = page;
    this.getPosts();
  }

  ngOnInit(): void {
    this.mainImage_s = this.state.model.mainImage_s;
    this.headline_s = this.state.model.headline_s;
    this.dateCreated = this.state.model.dateCreated;
    this.bios_o = this.state.model.authorBio_o;
    this.profilePic_s = this.state.model.authorBio_o?.[0]?.profilePic_s;
    this.name_s = this.state.model.authorBio_o?.[0]?.name_s;
    this.path = this.state.model.craftercms.path;
    this.categories_o = this.state.model.categories_o;
    this.tags_o = this.state.model.tags_o;
    this.content_o = this.state.model.content_o;
    this.paginationData = {
      currentPage: 0,
      itemsPerPage: this.state.meta.posts.limit,
      numOfPages: Math.ceil(this.state.meta.posts.total / this.state.meta.posts.limit)
    };

    this.getPosts();
  }

}
