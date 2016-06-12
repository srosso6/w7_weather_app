var CityManager = function(map, city) {
  this.map = map;
  this.city = city;
  this.updateMap = function(weatherData, iconUrl) {
    var cityCoord = this.getCityCoord(weatherData);
    this.map.removeMarkers();
    this.map.resetCenter(cityCoord);
    this.map.addInfoWindow(cityCoord, this.city, iconUrl);
  };
  this.getCityCoord = function(weatherData) {
    var coord = weatherData.coord;
    return this.convertCoordForGoogle(coord);
  };
  this.convertCoordForGoogle = function(coord) {
    var googleCoord = { lat: coord["lat"], lng: coord["lon"] };
    return googleCoord;
  };
  this.changeCity = function() {
    var cityWeather = new CityWeather(this.city);
    cityWeather.getCurrentWeather(function(currCityWeather) {
      var displayWeather = new DisplayWeather(currCityWeather);
      displayWeather.displayIcon();
      displayWeather.displayInfo();
      var iconUrl = displayWeather.iconUrl();
      this.updateMap(currCityWeather, iconUrl);
    }.bind(this));
  };
};