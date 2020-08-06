import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

export interface NavItem {
  contentTypeId: string;
  navLabel: string;
  orderDefault_f: number;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public nav: NavItem[] = [];
  public socialLinks = [];
  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.contentService.getNav()
      .subscribe(response => {
        this.nav = response;
      });

    this.contentService.getLevelDescriptor()
      .subscribe(levelDescriptor => {
        this.socialLinks = levelDescriptor.socialLinks_o;
      })
  }

}
