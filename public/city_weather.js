var CityWeather = function(city) {
  this.city = city;
  // MY OWN ASYNCHRONOUS FUNCTION
  this.getData = function(callType, callback) {
    var url = "http://api.openweathermap.org/data/2.5/" + callType + this.city + "&units=metric" + "&APPID=156603d8a8ea4d4155ec0d8335f5fe69";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      if(request.status === 200) {
        var jsonString = request.responseText;
        var data = JSON.parse(jsonString);
        callback(data);
      } 
    }
    request.send(null);
  };
  this.getCurrentWeather = function(callback) {
    var callType = "weather?q=";
    this.getData(callType, callback);
  };
  this.get5DayForecast = function(callback) {
    var callType = "forecast?q="
    this.getData(callType, callback);
  };
}