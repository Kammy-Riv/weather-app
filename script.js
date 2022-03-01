  function formatDate(date) {
        let hours = date.getHours();
        if (hours < 10) {
          hours = `0${hours}`;
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
        let dayIndex = date.getDay();
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let day = days[dayIndex];
        return `${day}, ${hours}:${minutes}`;
      }
function displayWeather(response) {
    console.log(response.data)
    document.querySelector("#city").innerHTML = response.data.name
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp)
    document.querySelector("#humidity").innerHTML = response.data.main.humidity
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed)
    document.querySelector("#description").innerHTML =response.data.weather[0].main
}

function search(city) {
let apiKey = "0a20d6fab116445cdaeb7f22b34b36f3";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather)
}

      function handleSubmit(event) {
        event.preventDefault();
       // let cityElement = document.querySelector("#city");
        //cityElement.innerHTML = "paris";
        //let cityInput = document.querySelector("#city-input");
        //cityElement.innerHTML = cityInput.value;
        let city = document.querySelector("#city-input").value
        search(city)
       
       
      }
      let dateElement = document.querySelector("#date");
      let currentTime = new Date();
      dateElement.innerHTML = formatDate(currentTime);

      let searchForm = document.querySelector("#search-form");
      searchForm.addEventListener("submit", handleSubmit);

      search("Philadelphia")

     // function convertToFahrenheit(event) {
      //  event.preventDefault();
      //  let temperatureElement = document.querySelector("#temperature");
      //  temperatureElement.innerHTML = 19
     // }

//function convertToCelsius(event) {
       // event.preventDefault();
       // let temperatureElement = document.querySelector("#temperature");
      //  temperatureElement.innerHTML= 66
        
     // }
     // let fahrenheitLink = document.querySelector("#fahrenheit-link");
     // fahrenheitLink.addEventListener("click", convertToFahrenheit);

     // let celsiusLink = document.querySelector("#celsius-link");
   // celsiusLink.addEventListener("click", convertToCelsius);