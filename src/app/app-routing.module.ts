import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { DailyComponent } from './forecast/daily/daily.component';
import { HourlyComponent } from './forecast/hourly/hourly.component';

const appRoutes: Routes = [
  // { path: '', component: ForecastComponent, children: [
  //   { path: 'daily', component: DailyComponent },
  //   { path: 'hourly', component: HourlyComponent }
  // ] },
  // { path: '**', redirectTo: '/forecast/daily'}
  { path: '', redirectTo: 'daily', pathMatch: 'full' },
  { path: 'daily', component: DailyComponent },
  { path: 'hourly', component: HourlyComponent },
  { path: '**', redirectTo: 'daily'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
