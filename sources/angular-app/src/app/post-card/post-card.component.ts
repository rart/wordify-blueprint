import { Component, OnInit, Input } from '@angular/core';

export const
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
  LANDSCAPE_COMPRESSED = 'landscapeCompressed',
  IMAGE_BACKGROUND = 'imageBackground';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() tags = '';
  @Input() model;
  @Input() showBlurb = false ;
  @Input() format = PORTRAIT;
  @Input() classes;
  @Input() numOfComments;
  public mainImage_s;
  public blurb_t;
  public headline_s;
  public dateModified;

  constructor() { }

  ngOnInit(): void {
    this.mainImage_s = this.model.mainImage_s;
    this.blurb_t = this.model.blurb_t;
    this.headline_s = this.model.headline_s;
    this.dateModified = this.model.craftercms.dateModified;
  }

}
