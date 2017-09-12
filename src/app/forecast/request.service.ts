import { Injectable, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import * as fromLocation from './store/location.reducers';
import * as WeatherLocationActions from './store/location.actions';

@Injectable()
export class RequestService implements OnInit {

  constructor(private http: HttpClient,
              private store: Store<fromLocation.AppState>,
              private router: Router) {}

  ngOnInit() {
  }

  getDailyForecast(address, zmw) {
    this.store.dispatch(new WeatherLocationActions.UpdateLocation(address)); // Update State for tracking
    this.store.dispatch(new WeatherLocationActions.UpdateCode(zmw));
    this.store.dispatch(new WeatherLocationActions.UpdateAutoResults([])); // Empty Autocomplete Results to rid of dropdown
    this.http.get(`https://api.wunderground.com/api/47be6887c60a72bf/forecast10day${zmw}.json`)
      .subscribe(
        data => {
          console.log('data passed');
            const dayCast = data['forecast']['simpleforecast']['forecastday'];
            this.store.dispatch(new WeatherLocationActions.UpdateDailyArray(dayCast));
        },
        error => {
          console.log('error passed');
          console.log(error);
        }
      );
    return this.http.get(`https://api.wunderground.com/api/47be6887c60a72bf/hourly${zmw}.json`)
      .subscribe(
        data => {
          console.log('data passed');
          const hourlyCast = data['hourly_forecast'];
          this.store.dispatch(new WeatherLocationActions.UpdateHourlyArray(hourlyCast));
        },
        error => {
          console.log('error passed');
          console.log(error);
        }
      );
  }
}
