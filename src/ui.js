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
  }

  function createWeatherForecast() {
    const weatherForecastContainer = document.createElement('div');
    weatherForecastContainer.className = 'forecast-container';
    leftColumnContainer.appendChild(weatherForecastContainer);
  }
  createWeatherOverview();
  createWeatherToday();
  createWeatherForecast();
}

export { weatherPopup };
