async function fetchWeatherData(location) {
  const apiKey = '10c23a9273ad387f646309ba05c1d7b1';
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();

    const currentWeather = {
      city: data.city.name,
      country: data.city.country,
      temperature: Math.round(data.list[0].main.temp),
      description: data.list[0].weather[0].description,
      icon: data.list[0].weather[0].icon,
      feelsLike: Math.round(data.list[0].main.feels_like),
      windSpeed: data.list[0].wind.speed,
      humidity: data.list[0].main.humidity,
      pressure: data.list[0].main.pressure,
    };

    const forecast = data.list
      .filter((entry) => entry.dt_txt.includes('12:00:00'))
      .slice(0, 5) // 5 days MAX
      .map((entry) => ({
        day: new Date(entry.dt * 1000).toLocaleDateString('en-US', {
          weekday: 'long',
        }),
        maxTemperature: Math.round(entry.main.temp_max), // Max temperature
        minTemperature: Math.round(entry.main.temp_min), // Min temperature
        description: entry.weather[0].description,
        icon: entry.weather[0].icon, // Icon data, but we ignore this since you're using a static icon
      }));

    return { currentWeather, forecast };
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    return null;
  }
}

export { fetchWeatherData };
