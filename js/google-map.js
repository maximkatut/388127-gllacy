function initMap() {
  var uluru = {lat: 59.938780, lng: 30.325137};
  var gllacy = {lat: 59.938780, lng: 30.323137};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var image = 'img/svg/pin.svg';
  var marker = new google.maps.Marker({
    position: gllacy,
    map: map,
    icon: image
  });
}