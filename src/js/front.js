$(function () {
  fullScreenContainer(); //setne intro na full height
  sliding(); // scrollTo z nav panela
  map(); //google mapa
});

$(window).load(function () {
  windowWidth = $(window).width();
});

$(window).resize(function () {
  newWindowWidth = $(window).width();

  if (windowWidth !== newWindowWidth) {
    setTimeout(function () {
      $(this).alignElementsSameHeight();
      fullScreenContainer();
    }, 205);
    windowWidth = newWindowWidth;
  }

  //TODO centrovat mapu po resize
  map();
});

/* =========================================
 * sliding
 *  =======================================*/

function sliding() {
  $('.scrollTo, #navigation a').click(function (event) {
    event.preventDefault();
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];

    $('body').scrollTo($('#' + trgt), 800, {offset: -80});

  });
}

/* =========================================
 * full screen intro
 *  =======================================*/

function fullScreenContainer() {
  var screenWidth = $(window).width() + "px";
  var screenHeight = '';
  if ($(window).height() > 500) {
    screenHeight = $(window).height() + "px";
  }
  else {
    screenHeight = "500px";
  }

  $("#intro, #intro .item").css({
    width: screenWidth,
    height: screenHeight
  });
}

/* =========================================
 *  map
 *  =======================================*/

function map() {

  var mapPosition = {
    lat: 48.11150,
    lng: 17.11251
  };

  var styles = [
    {"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]},
    {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]},
    {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]},
    {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]},
    {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]},
    {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]},
    {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]},
    {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]
    }
  ];
  map = new GMaps({
    el: '#map',
    lat: mapPosition.lat,
    lng: mapPosition.lng,
    zoom: 11,
    zoomControl: false,
    zoomControlOpt: {
      style: 'SMALL',
      position: 'TOP_LEFT'
    },
    keyboardShortcuts: false,
    panControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    overviewMapControl: false,
    scrollwheel: false,
    draggable: false,
    styles: styles
  });

  var image = 'img/marker.png';

  map.addMarker({
    lat: mapPosition.lat,
    lng: mapPosition.lng,
    icon: image/* ,
     title: '',
     infoWindow: {
     content: '<p>HTML Content</p>'
     }*/
  });
}
