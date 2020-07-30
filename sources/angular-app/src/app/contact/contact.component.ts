import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() state;
  public posts_o;

  constructor() {
  }

  ngOnInit(): void {
    this.posts_o = this.state.posts;
  }

}
