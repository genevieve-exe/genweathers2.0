function displayWeather(response) {
    let mainTemp = document.querySelector("#main-temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-app-city");
    
    cityElement.innerHTML = response.data.city;
    mainTemp.innerHTML = Math.round(temperature);

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDay = document.querySelector("#current-day");
    currentDay.innerHTML = days[new Date().getDay()];

    let hour = response.data.time
    console.log(response.data);
}

function searchCity(city) {
    let apiKey = "73a2286e35ab2408d94of591bf48e09t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather); 
}

function searchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Tokyo");