var Map = function(latLng, zoom) {
  this.markers = [];
  this.googleMap = new google.maps.Map(document.getElementById("map"), {
    center: latLng,
    zoom: zoom
  });
  this.resetCenter = function(latLng) {
    this.googleMap.setCenter(latLng);
  };
  this.addMarker = function(latLng, title, url) {
    var title = title.toString();
    var icon = {
      url: url,
      scaledSize: new google.maps.Size(50, 50),
    };
    var marker = new google.maps.Marker( {
      position: latLng,
      map: this.googleMap,
      title: title,
      icon: icon,
    });
    this.markers.push(marker);
    return marker;
  };
  this.removeMarkers = function() {
    for (var i = 0; i < this.markers.length; i++ ) {
      this.markers[i].setMap(null);
    }
    this.markers.length = 0;
  };
  this.addInfoWindow = function(latLng, title, iconUrl) {
    var marker = this.addMarker(latLng, title, iconUrl);
    var infowindow = new google.maps.InfoWindow( {
      content: title
    });
    marker.addListener("click", function() {
      infowindow.open(this.map, this);
    });
  };
}