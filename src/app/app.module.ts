import { BrowserModule, BrowserTransferStateModule, TransferState, makeStateKey } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SchoollistComponent } from './schoollist/schoollist.component';

const STATE_KEY = makeStateKey<any>('apollo.state');


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
    HttpLinkModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  cache: InMemoryCache;

  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
    private readonly transferState: TransferState
  ) {
    this.cache = new InMemoryCache();

    apollo.create({
      link: httpLink.create({ uri: 'http://qa.schoolapply.com:4000/graphql' }),
      cache: this.cache
    });

    const isBrowser = this.transferState.hasKey<any>(STATE_KEY);

    if (isBrowser) {
      this.onBrowser();
    } else {
      this.onServer();
    }
  }

  onServer() {
    this.transferState.onSerialize(STATE_KEY, () => {
      return this.cache.extract();
    });
  }

  onBrowser() {
    const state = this.transferState.get<any>(STATE_KEY, null);

    this.cache.restore(state);
  }
}
