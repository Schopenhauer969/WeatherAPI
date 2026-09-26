
const API_KEY = "c9efdf6ea1398b76ec079466740875cb";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherCard = document.getElementById("weather-card");
const errorMsg = document.getElementById("error");

const cityDisplay = document.getElementById("city-display");
const tempDisplay = document.getElementById("temp-display");
const conditionDisplay = document.getElementById("condition-display");
const humidityDisplay = document.getElementById("humidity-display");
const windDisplay = document.getElementById("wind-display");

async function fetchWeather(cityName) {
  if (!cityName) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("city not found");
    }
    const data = await response.json();

    cityDisplay.textContent = `${data.name} ${data.sys.country}`;
    tempDisplay.textContent = `${Math.round(data.main.temp)}°C`;
    conditionDisplay.textContent = data.weather[0].description;
    humidityDisplay.textContent = `${data.main.humidity}%`;
    windDisplay.textContent = `${data.wind.speed} m/s`;

    weatherCard.classList.add("active");
    errorMsg.style.display = "none";
  } catch (error) {
    weatherCard.classList.remove("active");
    errorMsg.style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  fetchWeather(cityInput.value.trim());
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetchWeather(cityInput.value.trim());
  }
});
