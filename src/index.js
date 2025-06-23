function searchCity(city) {
    let apiKey = "73a2286e35ab2408d94of591bf48e09t";
    let apiUrl = "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial";
    console.log(apiUrl);
}

function searchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
