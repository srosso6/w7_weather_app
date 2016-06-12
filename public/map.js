var Map = function(latLng, zoom) {
  this.markers = [];
  this.googleMap = new google.maps.Map(document.getElementById("map"), {
    center: latLng,
    zoom: zoom
  });
  this.resetCenter = function(latLng) {
    this.googleMap.setCenter(latLng);
  };
  this.addMarker = function(latLng, title) {
    var title = title.toString();
    var icon = {
      url: "sun_cloud.png",
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
  this.bindClick = function() {
    google.maps.event.addListener(this.googleMap, "click", function(event) {
    this.addMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() }, (this.markers.length +1));
    }.bind(this));
  };
  this.addInfoWindow = function(latLng, title) {
    var marker = this.addMarker(latLng, title);
    var infowindow = new google.maps.InfoWindow( {
      content: title
    });
    marker.addListener("click", function() {
      infowindow.open(this.map, this);
    });
  };
}