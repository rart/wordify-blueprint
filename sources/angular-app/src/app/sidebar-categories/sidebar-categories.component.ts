import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-categories',
  templateUrl: './sidebar-categories.component.html',
  styleUrls: ['./sidebar-categories.component.scss']
})
export class SidebarCategoriesComponent implements OnInit {
  @Input() categories;
  public categoriesItems;

  constructor() {
  }

  ngOnInit(): void {
    this.categoriesItems = this.categories.items.item;
  }

}
