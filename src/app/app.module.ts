import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';

import { weatherLocationReducer } from './forecast/store/location.reducers';
import { HourlyComponent } from './forecast/hourly/hourly.component';
import { DailyComponent } from './forecast/daily/daily.component';

import { AutocompleteService } from './forecast/autocomplete.service';
import { RequestService } from './forecast/request.service';
import { ClickValueService } from './forecast/searchdrop/click-value.service';
import { SearchdropComponent } from './forecast/searchdrop/searchdrop.component';
import { TodayComponent } from './forecast/today/today.component';


@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    HourlyComponent,
    DailyComponent,
    SearchdropComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    StoreModule.forRoot({weatherLocation: weatherLocationReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [RequestService, AutocompleteService, ClickValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
