console.log('testing')

const form= document.querySelector("#weather-form")
const input = document.querySelector("#weather-name")
const dataDiv = document.querySelector("#weather-data")
const highTemp = document.querySelector(".high-temp")
const lowTemp = document.querySelector(".low-temp")
const humidityValue = document.querySelector("#humidity-value")

const API_KEY = "HIDDEN_API_KEY"

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const nameofCity = form.cityName.value
    const nameofState = form.stateName.value
    console.log(nameofCity)

   getLatLog(nameofCity, nameofState, API_KEY)
})

async function getLatLog (city,state,API_KEY) {
    url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&appid=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const lat = data[0].lat
    const long = data[0].lon
    console.log(lat,long)
    weatherData(lat,long)
}

async function weatherData(lat,long) {
    
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=imperial&appid=HIDDEN_API_KEY`
const response = await fetch(url)
const data = await response.json()
console.log(data)
displayWeatherData(data)
}
//takes the data from our api above to display the current, high, low, and humidity temperatures
function displayWeatherData(data) {
const CurrentTemp = data.current.temp;
const HighTemp = data.daily[0].temp.max;
const LowTemp = data.daily[0].temp.min;
const humidity = data.current.humidity;


//displays our data via our bootstrap card
  dataDiv.innerHTML =`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h2 class="card-title">Weather Data:</h2>
      <li class="list-group-item">Current Temp: ${CurrentTemp}&deg;F</li>
      <li class="list-group-item">High-Temp: ${HighTemp}&deg;F</li>
      <li class="list-group-item">Low-Temp: ${LowTemp}&deg;F</li>
      <li class="list-group-item">Humidity: ${humidity}%</li>
    </div>
  </div>`;
}