/**
 * Created by maxime on 14/03/2016.
 */
function addWeatherPanel() {

    countryName = "";

    if (!isPanelExist('panel-weather')) {
        if (selectCountry()) {
            addPanel('Météo', 'weather');
            setWeatherToPanel();
        }
    }
    else {
        var weatherPanel = $('#panel-weather');
        if (weatherPanel.css('display') == 'none') {
            if (selectCountry()) {
                weatherPanel.show(500);
                setWeatherToPanel();
            }
        }
    }
}

function selectCountry() {

    var result = prompt("Choisir la ville : ", "Paris");

    var showPanel = true;

    if (result == null) {
        showPanel = false;
        $('#error').empty().append('Le nom de la ville est nul !').show(500).delay(2000).fadeOut(500);
    }
    else {
        countryName = result;
    }

    return showPanel;
}

function setWeatherToPanel() {

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + countryName + "&APPID=74b3587528fb768c7fcc1174c5851f44&units=metric").done(function (result) {
        $('#weather').empty().append(
            $('<p class="text-center" style="font-size: 20px;">' + result.main.temp + "°C" + '</p>')
                .append('<p class="text-center" style="font-size: 20px;">' + result.main.humidity + " % d'humidité" + '</p>')
        );
    });
}