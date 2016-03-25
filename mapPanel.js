var map;
var panel;
var initialize;
var calculate;
var direction;


function addMapPanel() {
    if (!isPanelExist('panel-map')) {
        addPanel('Itinéraire vers l\'IUT', 'map');
        addMapsItinerence();
    }
    else {
        var mapPanel = $('#panel-map');
        if (mapPanel.css('display') == 'none') {
            mapPanel.show(500);
        }
    }
}

function addMapsItinerence() {
    initMap();
}

var latitude, longitude;
function getLocation() {
    navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
    function foundLocation(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        alert("LAT : " + lat + ", LONG : " + long);
    }

    function noLocation() {
        alert('Could not find location');
    }
}

function initMap() {
    var iut = {lat: 44.791183, lng: -0.608709};
    var location = {lat: 44.791678, lng: -1.159185};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: iut,
        scrollwheel: false,
        zoom: 7
    });

    var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map
    });

    // Set destination, origin and travel mode.
    var request = {
        destination: location,
        origin: iut,
        travelMode: google.maps.TravelMode.DRIVING
    };

    // Pass the directions request to the directions service.
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the route on the map.
            directionsDisplay.setDirections(response);
        }
    });
}