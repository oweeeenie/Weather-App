async function weatherPopup(weatherData) {
  const { currentWeather, forecast } = weatherData;

  const existingPopup = document.querySelector('.popup-wrapper');
  if (existingPopup) existingPopup.remove();

  const weatherPopupWrapper = document.createElement('div');
  weatherPopupWrapper.className = 'popup-wrapper';

  const weatherMainContainer = document.createElement('div');
  weatherMainContainer.className = 'main-container';

  weatherPopupWrapper.appendChild(weatherMainContainer);
  document.body.appendChild(weatherPopupWrapper);

  function createWeatherOverview() {
    const weatherOverviewContainer = document.createElement('div');
    weatherOverviewContainer.className = 'overview-container';
    weatherMainContainer.appendChild(weatherOverviewContainer);

    const overviewHeaderContainer = document.createElement('div');
    overviewHeaderContainer.className = 'overview-header-container';
    weatherOverviewContainer.appendChild(overviewHeaderContainer);

    const overviewLocation = document.createElement('h2');
    overviewLocation.className = 'overview-location';
    overviewLocation.textContent = `${currentWeather.city}, ${currentWeather.country}`;
    overviewHeaderContainer.appendChild(overviewLocation);

    const overviewTime = document.createElement('p');
    overviewTime.className = 'overview-time';
    overviewTime.textContent = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    overviewHeaderContainer.appendChild(overviewTime);

    const overviewTemperatureContainer = document.createElement('div');
    overviewTemperatureContainer.className = 'overview-temperature-container';
    weatherOverviewContainer.appendChild(overviewTemperatureContainer);

    const overviewTemperature = document.createElement('p');
    overviewTemperature.className = 'overview-temperature';
    overviewTemperature.textContent = `${currentWeather.temperature}°C`;
    overviewTemperatureContainer.appendChild(overviewTemperature);
  }

  function createWeatherToday() {
    const weatherTodayContainer = document.createElement('div');
    weatherTodayContainer.className = 'today-container';
    weatherMainContainer.appendChild(weatherTodayContainer);

    const weatherTodayHeader = document.createElement('p');
    weatherTodayHeader.className = 'today-header';
    weatherTodayHeader.textContent = "Today's weather details";
    weatherTodayContainer.appendChild(weatherTodayHeader);

    const todayDetails = [
      {
        icon: 'fa-temperature-full',
        label: 'Feels Like',
        value: `${currentWeather.feelsLike}°C`,
      },
      {
        icon: 'fa-wind',
        label: 'Wind Speed',
        value: `${currentWeather.windSpeed} m/s`,
      },
      {
        icon: 'fa-sun',
        label: 'Humidity',
        value: `${currentWeather.humidity}%`,
      },
      {
        icon: 'fa-moon',
        label: 'Pressure',
        value: `${currentWeather.pressure} hPa`,
      },
    ];

    todayDetails.forEach((detail, index) => {
      const rowContainer = document.createElement('div');
      rowContainer.className = `row-${index + 1}-container`;

      const rowLabel = document.createElement('p');
      rowLabel.className = `row-${index + 1}`;
      rowLabel.innerHTML = `<i class="fa-solid ${detail.icon}"></i> ${detail.label}`;

      const rowValue = document.createElement('p');
      rowValue.className = `row-${index + 1}-value`;
      rowValue.textContent = detail.value;

      rowContainer.appendChild(rowLabel);
      rowContainer.appendChild(rowValue);
      weatherTodayContainer.appendChild(rowContainer);
    });
  }

  function createWeatherForecast() {
    const forecastContainer = document.createElement('div');
    forecastContainer.className = 'forecast-container';
    weatherMainContainer.appendChild(forecastContainer);

    const forecastTitle = document.createElement('p');
    forecastTitle.className = 'forecast-title';
    forecastTitle.textContent = 'Forecast for 5 days';
    forecastContainer.appendChild(forecastTitle);

    const daysContainer = document.createElement('div');
    daysContainer.className = 'days-container';

    forecast.forEach((day) => {
      const dayBox = document.createElement('div');
      dayBox.className = 'day-box';

      const dayName = document.createElement('div');
      dayName.className = 'day-name';
      dayName.textContent = day.day;

      const weatherIcon = document.createElement('div');
      weatherIcon.className = 'weather-icon';
      weatherIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`; // Static cloud icon

      const weatherDescription = document.createElement('div');
      weatherDescription.className = 'weather-description';
      weatherDescription.textContent = day.description;

      const weatherTemperature = document.createElement('div');
      weatherTemperature.className = 'weather-temperature';
      weatherTemperature.innerHTML = `Max: ${day.maxTemperature}°C, Min: ${day.minTemperature}°C`;

      dayBox.appendChild(dayName);
      dayBox.appendChild(weatherIcon);
      dayBox.append(weatherDescription);
      dayBox.append(weatherTemperature);

      daysContainer.appendChild(dayBox);
    });

    forecastContainer.appendChild(daysContainer);
  }

  createWeatherOverview();
  createWeatherToday();
  createWeatherForecast();
}

export { weatherPopup };
