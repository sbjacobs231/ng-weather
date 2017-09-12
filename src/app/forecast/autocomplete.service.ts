import { Injectable } from '@angular/core';
import { Response, Headers, JsonpModule, Jsonp, } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';

import * as fromLocation from './store/location.reducers';
import * as WeatherLocationActions from './store/location.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AutocompleteService {

  constructor(private httpClient: HttpClient,
              private http: Http,
              private jsonp: Jsonp,
              private store: Store<fromLocation.AppState>) { }

  autocomplete(userInput: string) {
    userInput = userInput.replace(/ /g, '%20');
    let url = `http://autocomplete.wunderground.com/aq?query=${userInput}&cb=JSONP_CALLBACK`;
    return this.jsonp.request(url)
        .map(res => {
          let cities = [];
          const results = res['_body'].RESULTS;
          for (let result of results) {
            if (result.type === "city") {
              cities.push(result)
            }
          }
          return cities;
        })
        .subscribe(data => {
          this.store.dispatch(new WeatherLocationActions.UpdateAutoResults(data));
        });
  }

}
