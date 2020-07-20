import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() state;
  public mainImage_s;
  public headline_s;
  public posts_o;
  public bios_o;
  public dateCreated;
  public profilePic_s;
  public name_s;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.state);
    this.mainImage_s = this.state.model.mainImage_s;
    this.headline_s = this.state.model.headline_s;
    this.dateCreated = this.state.model.dateCreated;
    this.posts_o = this.state.posts;
    this.bios_o = this.state.model.authorBio_o;
    this.profilePic_s = this.state.model.authorBio_o?.[0]?.profilePic_s;
    this.name_s = this.state.model.authorBio_o?.[0]?.name_s;
  }

}
