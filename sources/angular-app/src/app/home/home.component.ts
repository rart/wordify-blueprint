import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() state;
  constructor() {
  }
  public slider_o;
  public posts_o;
  public numOfPages;
  public pageNumber;
  public bios_o;

  ngOnInit(): void {
    // const {
    //   model,
    //   model: {
    //     slider_o
    //   },
    //   posts,
    //   meta: {
    //     posts: {
    //       total,
    //       limit
    //     }
    //   }
    // } = this.state;
    this.slider_o = this.state.model.slider_o;
    this.posts_o = this.state.posts;
    this.bios_o = this.state.model.bios_o;
    this.numOfPages = Math.ceil(this.state.meta.posts.total / this.state.meta.posts.limit);
    this.pageNumber = 1;
  }
}
