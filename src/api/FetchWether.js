import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '401617f8e678722c870c0cf2334acbd1';

export const FetchWether = async (query) => {
  const { data6 } = await axios.get(URL, {
    param: {
      q: query,
      units: 'matric',
      APPID: API_KEY,
      }
  });

  return data;
}
