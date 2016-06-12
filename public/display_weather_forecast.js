var DisplayWeatherForecast = function(weatherData, city) {
  this.weatherData = weatherData;
  this.city = _.startCase(city);
  this.temperature = function() {
    var tempData = [];
    for(i=0; i<weatherData.list.length; i++) {
      tempData.push(weatherData.list[i]["main"]["temp"]);
    };
    return tempData;
  };
  this.dateTime = function() {
    var dtData = [];
    for(i=0; i<weatherData.list.length; i++) {
      var date = Date.parse(weatherData.list[i]["dt_txt"]);
      dtData.push(date);
    };
    return dtData;
  };
  this.createChart = function() {
    var data = _.zip(this.dateTime(), this.temperature());
    series = [{ name: this.city, data: data }];
    title = { text: this.city + " 5-Day Forecast" };
    var chart = new Chart(series, title);
  };
};