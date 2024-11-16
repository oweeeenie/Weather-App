import './styles.css';
import { weatherPopup } from './ui';
import { fetchWeatherData } from './api';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.weather-form');
  const input = document.querySelector('#location');

  // Ensure the form and input exist before attaching the event listener
  if (form && input) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const city = input.value.trim();

      if (city) {
        try {
          const weatherData = await fetchWeatherData(city); // Get weather data
          if (!weatherData) {
            alert('Invalid city or failed to fetch data.');
            return;
          }
          weatherPopup(weatherData); // Pass data to UI
        } catch (error) {
          console.error('Error fetching weather data:', error);
          alert('Could not fetch weather data. Please try again.');
        }
      } else {
        alert('Please enter a city name.');
      }
    });
  } else {
    console.error('Form or input element not found!');
  }
});
