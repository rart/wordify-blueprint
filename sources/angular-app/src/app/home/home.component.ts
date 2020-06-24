import { Component, OnInit,  Input  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() state;
  constructor() { }
  public slider_o;

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
  }

}
