function weatherPopup() {
  const weatherMainContainer = document.createElement('div'); // holds ALL 3 weather boxes

  function createWeatherContainer() {
    weatherMainContainer.className = 'main-container';
    document.appendChild(weatherMainContainer);
  }

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

    let overviewTime = document.createElement('h2');
    overviewTime.className = 'overview-time';
    overviewTime.textContent = '20:00';
    overviewHeaderContainer.appendChild(overviewTime);

    const overviewTemperatureContainer = document.createElement('div');
    overviewTemperatureContainer.className = 'overview-temperature-container';
    weatherOverviewContainer.appendChild(overviewTemperatureContainer);

    let overviewTemperature = document.createElement('h1'); // goes bottom left with current temp
    overviewTemperature.className = 'overview-temperature';
    overviewTemperature.textContent = '30°c';
    overviewTemperatureContainer.appendChild(overviewTemperature);
  }

  function createWeatherToday() {
    const weatherTodayContainer = document.createElement('div');
    weatherTodayContainer.className = 'today-container';
    weatherMainContainer.appendChild(weatherTodayContainer);
  }

  function createWeatherForecast() {
    const weatherForecastContainer = document.createElement('div');
    weatherForecastContainer.className = 'forecast-container';
    weatherMainContainer.appendChild(weatherForecastContainer);
  }
  createWeatherContainer();
  createWeatherOverview();
  createWeatherToday();
  createWeatherForecast();
}
