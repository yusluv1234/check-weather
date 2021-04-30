import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherData, WeatherError } from '../types';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    if(!res.ok) {
      const resData: WeatherError = await res.json();
      throw new Error(resData.message);
    }
    const resData: WeatherData = await res.json();
    dispatch({
      type: GET_WEATHER,
      payload: resData
    });
    } catch(err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message
      });
    }
  }
}

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}