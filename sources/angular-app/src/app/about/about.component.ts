import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() state;
  public posts_o;
  public bios_o;
  public headline_s;
  constructor() {
  }

  ngOnInit(): void {
    this.headline_s = this.state.model.headline_s;
    this.posts_o = this.state.posts;
    this.bios_o = this.state.model.bios_o;
  }

}
