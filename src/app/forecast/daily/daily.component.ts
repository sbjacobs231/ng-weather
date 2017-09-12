import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromLocation from '../store/location.reducers';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  dailyState: Observable<fromLocation.State>;

  constructor(private store: Store<fromLocation.AppState>) { }

  ngOnInit() {
    this.dailyState = this.store.select('weatherLocation');
  }

}
