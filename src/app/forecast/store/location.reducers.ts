import * as WeatherLocationActions from './location.actions'

export interface AppState {
  weatherLocation: State;
}

export interface State {
  wLocation: string;
  cityCode: string;
  dailyArray: string[];
  hourlyArray: string[];
  autoResults: string[];
}

const initialState: State = {
  wLocation: 'San Francisco, CA',
  cityCode: '/q/zmw:94102.1.99999',
  dailyArray: [],
  hourlyArray: [],
  autoResults: []
}

export function weatherLocationReducer(state = initialState, action: WeatherLocationActions.WeatherLocationActions) {
  switch(action.type) {
    case WeatherLocationActions.UPDATE_LOCATION:
      return {
        ...state,
        wLocation: action.payload
      };
    case WeatherLocationActions.UPDATE_CODE:
      return {
        ...state,
        cityCode: action.payload
      }
    case WeatherLocationActions.UPDATE_DAILY_ARRAY:
      return {
        ...state,
        dailyArray: action.payload
      }
    case WeatherLocationActions.UPDATE_HOURLY_ARRAY:
      return {
        ...state,
        hourlyArray: action.payload
      }
    case WeatherLocationActions.UPDATE_AUTO_RESULTS:
      return {
        ...state,
        autoResults: action.payload
      }
    default:
      return state;
  }
}
