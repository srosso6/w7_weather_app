var main = function() {
  document.getElementById("weather-btn").addEventListener("click", handleClick);
  // inside clickhandler
  // cityManager.updatecity(city)

  // cityManager.onCityChange = function (weatherdata) { 
    // weatherDisplayWidgert.update(weatherdata); }
  //  
  //}
  loadLastCity();
}

var loadLastCity = function() {
  var city = localStorage.getItem("city");
  document.getElementById("text-input").value = city;
  handleClick();
}

var handleClick = function() {
  var city = getCity();
  localStorage.setItem("city", city);
  changeCity(city);
}

var getCity = function() {
  var input = document.getElementById("text-input");
  return input.value;
}

var changeCity = function(city) {
  var cityWeather = new CityWeather(city);
  cityWeather.getCurrentWeather(function(currCityWeather) {
      createMap(currCityWeather);
      var displayWeather = new DisplayWeather(currCityWeather);
      displayWeather.displayIcon();
      displayWeather.displayInfo();
  });
}

var createMap = function(weatherData) {
  var cityCoord = getCityCoord(weatherData);
  var city = weatherData.name
  var map = new Map(cityCoord, 11);
  map.addMarker(cityCoord, city);
  map.addInfoWindow(cityCoord, city);
}

var getCityCoord = function(weatherData) {
  var coord = weatherData.coord;
  return convertCoordForGoogle(coord);
}

var convertCoordForGoogle = function(coord) {
  var googleCoord = { lat: coord["lat"], lng: coord["lon"] };
  return googleCoord;
}

// var get5DayForecast = function(cityWeather) {
//   cityWeather.get5DayForecast(function(cityWeatherForecast) {
//     cityWeatherForecast;
//   });
// }

window.onload = main;