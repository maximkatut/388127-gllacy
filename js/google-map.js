var isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
var image;

if (isIE11) {
  image = 'img/pin.png';
} else {
  image = 'img/svg/pin.svg';
}

function initMap() {
  var uluru = {lat: 59.939450, lng: 30.329437};
  var gllacy = {lat: 59.938780, lng: 30.323137};
  var map = new google.maps.Map(document.getElementsByClassName('map')[0], {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: gllacy,
    map: map,
    icon: image
  });
}