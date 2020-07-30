import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
import Utils from './utils';
import { Observable } from 'rxjs';
import { NavItem } from './header/header.component';
import byUrlQuery from './queries.graphql';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public graphqlServer;
  constructor(private httpClient: HttpClient) {
    this.graphqlServer = environment.graphqlServer;
    if (!this.graphqlServer.includes(Utils.siteName())) {
      this.graphqlServer += `?crafterSite=${Utils.siteName()}`;
    }
  }
  fetchQuery(operation, variables?) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    return this.httpClient.post(
      this.graphqlServer,
      JSON.stringify({
        query: operation.text,
        variables
      }),
      options
    );
  }

  getNav(): Observable<NavItem[]> {
    return this.fetchQuery({
      text: `
          query Nav {
            pages {
              total
              items {
                navLabel
                contentTypeId: content__type
                url: localId(transform: "storeUrlToRenderUrl")
                placeInNav(filter: { equals: true }) @skip(if: true)
                orderDefault_f
              }
            }
          }
        `
    }).pipe(map((response: any) => response.data.pages.items));
  }

  getPageData(url: string, options?): Observable<any> {
    return this.fetchQuery(
      { text: byUrlQuery },
      {
        url: `.*${url === '/' ? 'website/index' : url}.*`,
        ...options
      }
    )
  }
}
