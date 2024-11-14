const fetchWeatherData = async (location) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=10c23a9273ad387f646309ba05c1d7b1&units=metric`
    );
    if (!response.ok) {
      throw new Error(`Location not found: ${response.statusText}`);
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log('error fetching weather', error);
    throw error;
  }
};

export { fetchWeatherData };
