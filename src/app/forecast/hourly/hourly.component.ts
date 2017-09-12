import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromLocation from '../store/location.reducers';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {
  hourlyState: Observable<fromLocation.State>;

  constructor(private store: Store<fromLocation.AppState>) { }

  ngOnInit() {
    this.hourlyState = this.store.select('weatherLocation');
  }

}
