import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { ClickValueService } from './click-value.service';
import { RequestService } from '../request.service';
import * as WeatherLocationActions from '../store/location.actions';
import * as fromLocation from '../store/location.reducers';

@Component({
  selector: 'app-searchdrop',
  templateUrl: './searchdrop.component.html',
  styleUrls: ['./searchdrop.component.css']
})
export class SearchdropComponent implements OnInit {
  matches: Observable<fromLocation.State>;

  constructor(private store: Store<fromLocation.AppState>,
              private clickValueService: ClickValueService,
              private requestService: RequestService) { }

  ngOnInit() {
    this.matches = this.store.select('weatherLocation');
  }

  onClick(selection, zmw) {
    const updateSelection = selection.srcElement.innerHTML;
    this.clickValueService.searchValue.next(updateSelection); // Subject
    this.requestService.getDailyForecast(updateSelection, zmw);
  }

}
