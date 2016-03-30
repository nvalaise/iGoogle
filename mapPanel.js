var map;
var panel;
var initialize;
var calculate;
var direction;


function addMapPanel() {
    if (!isPanelExist('panel-map')) {
        addPanel('Itinéraire vers l\'IUT', 'map');
        getLocation();
    }
    else {
        var mapPanel = $('#panel-map');
        if (mapPanel.css('display') == 'none') {
            mapPanel.show(500);
        }
    }
}

var latitude, longitude;
function getLocation() {
    if (navigator.geolocation) {
        $('#map').empty().append("<p>Calcul de l\'itinéraire en cours ...</p>");

        navigator.geolocation.getCurrentPosition(setPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function setPosition(position) {

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    initMap();
}

function initMap() {

    if (latitude != undefined && longitude != undefined) {

        $('#map').empty();
        var iut = {lat: 44.791183, lng: -0.608709};
        var location = {lat: latitude, lng: longitude};

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
            destination: iut,
            origin: location,
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
}