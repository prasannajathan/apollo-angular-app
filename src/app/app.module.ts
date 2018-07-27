import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SchoollistComponent } from './schoollist/schoollist.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SchoollistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
      apollo: Apollo,
      httpLink: HttpLink
    ) {
      apollo.create({
        link: httpLink.create({ uri: 'http://qa.schoolapply.com:4000/graphql' }), 
        cache: new InMemoryCache()
      });
    }
}
