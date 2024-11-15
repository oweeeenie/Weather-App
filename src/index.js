import './styles.css';
import { handleWeatherSearch } from './controller';
import { weatherPopup } from './ui';

const weatherForm = document.querySelector('.weather-form');
const weatherInput = document.querySelector('#location');

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let userInput = weatherInput.value;
  handleWeatherSearch(userInput);
});

weatherPopup();
