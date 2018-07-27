import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { School, PopularSchools } from '../types';

@Component({
  selector: 'app-schoollist',
  templateUrl: './schoollist.component.html',
  styleUrls: ['./schoollist.component.css']
})
export class SchoollistComponent implements OnInit {
  schools: Observable<School[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.schools = this.apollo.watchQuery<PopularSchools>({
      query: gql`
      query {
        getpopularschools {
          Id
          Name
          Caption
          Location {
            AddressLine1
            AddressLine2
            City
            CountryCode
            CountryId
            CountryName
            Latitude
            LocationId
            Longitude
            SchoolId
            State
            StateId
          }
        }
      }
      `
    })
    .valueChanges
    .pipe(
      map(result => result.data.getpopularschools)
    );
  }
}

