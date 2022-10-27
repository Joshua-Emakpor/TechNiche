"use strict";

window.initMap = function () {
  var customMapType = new google.maps.StyledMapType([{
    stylers: [{
      'saturation': -100
    }, {
      'lightness': 50
    }, {
      'visibility': 'simplified'
    }]
  }, {
    elementType: 'labels',
    stylers: [{
      visibility: 'on'
    }]
  }, {
    featureType: 'road',
    stylers: [{
      color: '#bbb'
    }]
  }], {
    name: 'Dublin'
  });
  var image = new google.maps.MarkerImage('img/widgets/gmap-pin.png', new google.maps.Size(48, 54), new google.maps.Point(20, 20), new google.maps.Point(100, 100));
  var customMapTypeId = 'custom_style';
  var benin = {
    lat: 6.420371,
    lng: 5.599934
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    scrollwheel: true,
    streetViewControl: true,
    mapTypeControl: true,
    center: brooklyn,
    // Brooklyn.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });
  var contentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h1 id="firstHeading" class="firstHeading">Brooklyn</h1>' + '<div id="bodyContent">' + '<p>277 Bedford Avenue, <br> Brooklyn, NY 11211, <br> New York, USA</p>' + '</div>' + '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
  });
  var marker = new google.maps.Marker({
    map: map,
    clickable: true,
    title: 'Benin',
    position: benin
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
};