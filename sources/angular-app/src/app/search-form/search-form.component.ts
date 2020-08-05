import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() classes;
  @Input() placeholder;
  @Input() id;
  public keyword = '';

  constructor(private actRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(parameters =>
      this.keyword = parameters.q
    );
  }

  onEnter(): void {
    this.router.navigate(
      ['/search'],
      {
        queryParams: {
          q: this.keyword
        }
      }
    );
  }

}
