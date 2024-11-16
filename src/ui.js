function weatherPopup() {
  const weatherPopupWrapper = document.createElement('div');
  weatherPopupWrapper.className = 'popup-wrapper';

  const weatherMainContainer = document.createElement('div');
  weatherMainContainer.className = 'main-container';

  weatherPopupWrapper.appendChild(weatherMainContainer);
  document.body.appendChild(weatherPopupWrapper);

  function createWeatherOverview() {
    // entire overview box (left box)
    const weatherOverviewContainer = document.createElement('div');
    weatherOverviewContainer.className = 'overview-container';
    weatherMainContainer.appendChild(weatherOverviewContainer);

    const overviewHeaderContainer = document.createElement('div'); // holds location + time
    overviewHeaderContainer.className = 'overview-header-container';
    weatherOverviewContainer.appendChild(overviewHeaderContainer);

    let overviewLocation = document.createElement('h2');
    overviewLocation.className = 'overview-location';
    overviewLocation.textContent = 'Columbus, Ohio - United States Of America';
    overviewHeaderContainer.appendChild(overviewLocation);

    let overviewTime = document.createElement('p');
    overviewTime.className = 'overview-time';
    overviewTime.textContent = '20:00';
    overviewHeaderContainer.appendChild(overviewTime);

    const overviewTemperatureContainer = document.createElement('div');
    overviewTemperatureContainer.className = 'overview-temperature-container';
    weatherOverviewContainer.appendChild(overviewTemperatureContainer);

    let overviewTemperature = document.createElement('p'); // goes bottom left with current temp
    overviewTemperature.className = 'overview-temperature';
    overviewTemperature.textContent = '30°c';
    overviewTemperatureContainer.appendChild(overviewTemperature);
  }

  const leftColumnContainer = document.createElement('div');
  leftColumnContainer.className = 'left-column';
  weatherMainContainer.appendChild(leftColumnContainer);

  function createWeatherToday() {
    const weatherTodayContainer = document.createElement('div');
    weatherTodayContainer.className = 'today-container';
    leftColumnContainer.appendChild(weatherTodayContainer);

    const weatherTodayHeader = document.createElement('p');
    weatherTodayHeader.className = 'today-header';
    weatherTodayHeader.textContent = "Today's weather details";
    weatherTodayContainer.appendChild(weatherTodayHeader);

    const rowOneContainer = document.createElement('div'); // start of rows in today's weather
    rowOneContainer.className = 'row-one-container';
    weatherTodayContainer.appendChild(rowOneContainer);

    const rowOne = document.createElement('p');
    rowOne.className = 'row-one';
    rowOne.innerHTML =
      '<i class="fa-solid fa-temperature-full"></i> Weather Condition';

    let rowOneValue = document.createElement('p');
    rowOneValue.className = 'row-one-value';
    rowOneValue.textContent = '10%';
    rowOneContainer.appendChild(rowOne);
    rowOneContainer.appendChild(rowOneValue);

    const rowTwoContainer = document.createElement('div');
    rowTwoContainer.className = 'row-two-container';
    weatherTodayContainer.appendChild(rowTwoContainer);

    const rowTwo = document.createElement('p');
    rowTwo.className = 'row-two';
    rowTwo.innerHTML = '<i class="fa-solid fa-wind"></i> Weather Condition';

    let rowTwoValue = document.createElement('p');
    rowTwoValue.className = 'row-two-value';
    rowTwoValue.textContent = '10%';
    rowTwoContainer.appendChild(rowTwo);
    rowTwoContainer.appendChild(rowTwoValue);

    const rowThreeContainer = document.createElement('div');
    rowThreeContainer.className = 'row-three-container';
    weatherTodayContainer.appendChild(rowThreeContainer);

    const rowThree = document.createElement('p');
    rowThree.className = 'row-three';
    rowThree.innerHTML = '<i class="fa-regular fa-sun"></i> Weather Condition';

    let rowThreeValue = document.createElement('p');
    rowThreeValue.className = 'row-three-value';
    rowThreeValue.textContent = '10%';
    rowThreeContainer.appendChild(rowThree);
    rowThreeContainer.appendChild(rowThreeValue);

    const rowFourContainer = document.createElement('div');
    rowFourContainer.className = 'row-four-container';
    weatherTodayContainer.appendChild(rowFourContainer);

    const rowFour = document.createElement('p');
    rowFour.className = 'row-four';
    rowFour.innerHTML = '<i class="fa-solid fa-moon"></i> Weather Condition';

    let rowFourValue = document.createElement('p');
    rowFourValue.className = 'row-four-value';
    rowFourValue.textContent = '10%';
    rowFourContainer.appendChild(rowFour);
    rowFourContainer.appendChild(rowFourValue);

    const rowFiveContainer = document.createElement('div');
    rowFiveContainer.className = 'row-five-container';
    weatherTodayContainer.appendChild(rowFiveContainer);

    const rowFive = document.createElement('p');
    rowFive.className = 'row-five';
    rowFive.innerHTML =
      '<i class="fa-solid fa-cloud-moon-rain"></i> Weather Condition';

    let rowFiveValue = document.createElement('p');
    rowFiveValue.className = 'row-five-value';
    rowFiveValue.textContent = '10%';
    rowFiveContainer.appendChild(rowFive);
    rowFiveContainer.appendChild(rowFiveValue);
  }

  function createWeatherForecast() {
    // start of forecast
    const forecastContainer = document.createElement('div');
    forecastContainer.className = 'forecast-container';
    leftColumnContainer.appendChild(forecastContainer);

    const forecastTitle = document.createElement('p');
    forecastTitle.className = 'forecast-title';
    forecastTitle.textContent = 'Forecast for 5 days';
    forecastContainer.appendChild(forecastTitle);

    const forecastDays = [
      { day: 'Wednesday', weather: 'Rain', temp: '9°C 5°C', icon: '🌧️' },
      { day: 'Thursday', weather: 'Cloudy', temp: '10°C 8°C', icon: '☁️' },
      { day: 'Friday', weather: 'Few Clouds', temp: '11°C 6°C', icon: '⛅' },
      { day: 'Saturday', weather: 'Cloudy', temp: '13°C 5°C', icon: '☁️' },
      { day: 'Sunday', weather: 'Cloudy', temp: '13°C 8°C', icon: '☁️' },
    ];

    const daysContainer = document.createElement('div');
    daysContainer.className = 'days-container';

    forecastDays.forEach((day) => {
      const dayBox = document.createElement('div');
      dayBox.className = 'day-box';

      const dayName = document.createElement('div');
      dayName.className = 'day-name';
      dayName.textContent = day.day;

      const weatherIcon = document.createElement('div');
      weatherIcon.className = 'weather-icon';
      weatherIcon.textContent = day.icon;

      const weatherDescription = document.createElement('div');
      weatherDescription.className = 'weather-description';
      weatherDescription.textContent = day.weather;

      const weatherTemperature = document.createElement('div');
      weatherTemperature.className = 'weather-temperature';
      weatherTemperature.textContent = day.temp;

      dayBox.appendChild(dayName);
      dayBox.appendChild(weatherIcon);
      dayBox.append(weatherDescription);
      dayBox.append(weatherTemperature);

      daysContainer.appendChild(dayBox);
    });
    forecastContainer.appendChild(daysContainer);
    leftColumnContainer.appendChild(forecastContainer);
  }
  createWeatherOverview();
  createWeatherToday();
  createWeatherForecast();
}

export { weatherPopup };
