import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-tags',
  templateUrl: './sidebar-tags.component.html',
  styleUrls: ['./sidebar-tags.component.scss']
})
export class SidebarTagsComponent implements OnInit {
  @Input() tags;
  public tagsItems;

  constructor() {
  }

  ngOnInit(): void {
    this.tagsItems = this.tags.items.item;
  }

}
