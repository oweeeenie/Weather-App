import { fetchWeatherData } from './api';

async function handleWeatherSearch(location) {
  const weatherData = await fetchWeatherData(location);
  console.log(weatherData);
}

export { handleWeatherSearch };
