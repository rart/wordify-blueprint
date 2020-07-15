import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() classes;
  @Input() placeholder;
  @Input() id;
  public keyword;

  constructor() {
  }

  ngOnInit(): void {

  }

  onEnter(): void {
    console.log(this.keyword);
  }

}
