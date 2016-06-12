var main = function() {

  var map = new Map({lat: 55.95, lng: -3.2}, 11);

  var handleClick = function(map) {
    var city = getCity();
    localStorage.setItem("city", city);
    var cityManager = new CityManager(map, city);
    cityManager.changeCity();
  };

  var handleSubmit = function(event) {
    event.preventDefault();
    handleClick(map);
  };

  var getCity = function() {
    var input = document.getElementById("text-input");
    return input.value;
  }

  var loadLastCity = function() {
    var city = localStorage.getItem("city");
    document.getElementById("text-input").value = city;
    handleClick(map);
  }

  loadLastCity();

  document.getElementById("weather-btn").addEventListener("click", handleClick);

  document.getElementById("form").addEventListener("submit", handleSubmit);
}

window.onload = main;