async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = '629a360ae228c35413eef08595874324'; // Use your API key here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    const tempC = data.main.temp;
    const tempF = (tempC * 9/5) + 32;

    const weather = `
      <h2>${data.name}</h2>
      <p>Temperature: ${tempC.toFixed(1)}°C / ${tempF.toFixed(1)}°F</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;

    document.getElementById('weatherResult').innerHTML = weather;

  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

// Optional: If you want a button in HTML that calls getWeather, you can add event listener here:
// document.getElementById('getWeatherBtn').addEventListener('click', getWeather);
