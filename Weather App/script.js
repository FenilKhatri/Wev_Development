const apiKey = "ef1dfb7fafbc7ff0e6d6112b421159a7";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=linch";

async function checkWeather(city) {
      const response = await fetch(apiURL + city + `&appid=${apiKey}`);
      var data = await response.json();

      console.log(data);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}
checkWeather();