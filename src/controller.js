import { weatherPopup } from './ui';
import { fetchWeatherData } from './api';

// This function is triggered when the user searches for a location
async function handleWeatherSearch(location) {
  const weatherData = await fetchWeatherData(location);
  if (weatherData) {
    weatherPopup(weatherData);
  } else {
    alert('City not found or there was an error with the data.');
  }
}

// Add event listener for form submission to trigger the weather search
document.querySelector('#weatherForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const location = document.querySelector('#locationInput').value;
  handleWeatherSearch(location);
});
