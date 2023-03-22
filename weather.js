console.log('testing')

const form= document.querySelector("#weather-form")
const input = document.querySelector("#weather-name")
const dataDiv = document.querySelector("#weather-data")
const highTemp = document.querySelector(".high-temp")
const lowTemp = document.querySelector(".low-temp")
const humidityValue = document.querySelector("#humidity-value")




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



async function weatherData(lat,long,API_KEY) {
    
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${API_KEY}`
const response = await fetch(url)
const data = await response.json()
console.log(data)
displayWeatherData(data)
}

function displayWeatherData(data) {




    dataDiv.innerHTML =`<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">High-Temp: </li>
      <li class="list-group-item">Low-Temp: </li>
      <li class="list-group-item">Humidity: </li>
    </ul>
  </div>`


}
// button.addEventListener('click', function(name){
// fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=b2a85b615bec4abd0009f6a6025842d8')
// .then(response => response.json())
// .then(data => {
//     var nameValue = data['name'];
//     var temperaturesValue = data['main']['temperatures'];
//     var descriptionValue = data['weather'][0]['description'];

//     name.innerHTML = nameValue;
//     temperatures.innerHTML =temperaturesValue;
//     descriptionValue.innerHTML = descriptionValue
//     inputValue.value="";
// })

// .catch(err => alert("Incorrect City!"))
// })











// var button= document.querySelector('.button')
// var inputValue= document.querySelector('.inputValue')
// var name= document.querySelector('.name');
// var description= document.querySelector('.description');
// var temperatures= document.querySelector('.temperatures');