const apiKey = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,weather_code";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.innerHTML = "Please enter a city name.";
    return;
  }

  const url = https://open-meteo.com/en/docs?hourly=temperature_2m,weather_code#data_sources;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const { name } = data;
    const { temp } = data.main;
    const { description } = data.weather[0];

    weatherResult.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Temperature:</strong> ${temp} °C</p>
      <p><strong>Condition:</strong> ${description}</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = Error: ${error.message};
  }
}