import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AutocompleteService } from './autocomplete.service';
import { RequestService } from './request.service';
import { ClickValueService } from './searchdrop/click-value.service';
import * as WeatherLocationActions from './store/location.actions';
import * as fromLocation from './store/location.reducers';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
  providers: []
})
export class ForecastComponent implements OnInit {
  @ViewChild('autocomplete') private inputSearch: ElementRef;
  today: number = Date.now();
  address: Observable<fromLocation.State>;
  inputValue: any;

  constructor(private store: Store<fromLocation.AppState>,
              private autocompleteService: AutocompleteService,
              private requestService: RequestService,
              private clickValueService: ClickValueService) { }

  ngOnInit() {
    this.address = this.store.select('weatherLocation');
    this.requestService.getDailyForecast('San Francisco, CA', '/q/zmw:94102.1.99999');
    this.clickValueService.searchValue.subscribe(
      data => {
        this.inputValue = data;
      }
    );
    this.inputSearch.nativeElement.focus();
  }

  runAutocomplete(userInput) {
    this.autocompleteService.autocomplete(userInput);
  }

}
