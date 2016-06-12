var DisplayWeather = function(weatherData) {
  this.weatherData = weatherData;
  console.log(weatherData);
  this.description = function() {
    var desc = this.weatherData.weather[0]["description"];
    return _.startCase(desc);
  };
  this.temperature = function() {
    var temp = this.weatherData.main["temp"]
    return _.round(temp, 2) +"&deg;C";
  };
  this.windSpeed = function() {
    var speedMetric = this.weatherData.wind["speed"];
    var speedImperial = (speedMetric/1609.344)/(1/3600);
    return _.round(speedImperial, 2) + "mph";
  };
  this.rainfall = function() {
    if(this.weatherData.rain["1h"]) {
      var hour1 = this.weatherData.rain["1h"];
      return _.round(hour1, 2) + "mm (in last hour)";
    }
    var hour3 = this.weatherData.rain["3h"];
    return _.round(hour3, 2) + "mm (in last 3 hours)";
  };
  this.iconCode = function() {
    return this.weatherData.weather[0]["icon"];
  };
  this.displayIcon = function() {
    var icon = document.getElementById("icon");
    icon.setAttribute("src", "http://openweathermap.org/img/w/" + this.iconCode() + ".png");
  };
  this.displayInfo = function() {
    var info = document.querySelectorAll(".curr-info");
    var headers = document.querySelectorAll(".curr-info-header");
    headers[0].innerText = "Description:";
    info[0].innerText = this.description();
    headers[1].innerText = "Temperature:";
    info[1].innerHTML = this.temperature();
    headers[2].innerText = "Wind Speed:";
    info[2].innerText = this.windSpeed();
    headers[3].innerText = "Rainfall:";
    info[3].innerText = this.rainfall();
  }
}





// wind speed in miles per hour
