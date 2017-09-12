import { Action } from '@ngrx/store';

export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_CODE = 'UPDATE_CODE';
export const UPDATE_DAILY_ARRAY = 'UPDATE_DAILY_ARRAY';
export const UPDATE_HOURLY_ARRAY = 'UPDATE_HOURLY_ARRAY';
export const UPDATE_AUTO_RESULTS = 'UPDATE_AUTO_RESULTS';

export class UpdateLocation implements Action {
  readonly type = UPDATE_LOCATION;

  constructor(public payload: string) {}
}

export class UpdateCode implements Action {
  readonly type = UPDATE_CODE;

  constructor(public payload: string) {}
}

export class UpdateDailyArray implements Action {
  readonly type = UPDATE_DAILY_ARRAY;

  constructor(public payload: string[]) {}
}

export class UpdateHourlyArray implements Action {
  readonly type = UPDATE_HOURLY_ARRAY;

  constructor(public payload: string[]) {}
}

export class UpdateAutoResults implements Action {
  readonly type = UPDATE_AUTO_RESULTS;

  constructor(public payload: string[]) {}
}



export type WeatherLocationActions =
  UpdateLocation |
  UpdateCode |
  UpdateDailyArray |
  UpdateHourlyArray |
  UpdateAutoResults;
