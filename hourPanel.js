/**
 * Created by maxime on 14/03/2016.
 */
function addHourPanel() {

    if (!isPanelExist('panel-hour')) {
        addPanel('Heure', 'hour');

        getCurrentTime = setInterval(function () {
            setCurrentTimeToHourPanel()
        }, 0);
    }
    else {
        var hourPanel = $('#panel-hour');
        if (hourPanel.css('display') == 'none') {
            getCurrentTime = setInterval(function () {
                setCurrentTimeToHourPanel()
            }, 0);
            hourPanel.show(500);
        }
    }
}

function setCurrentTimeToHourPanel() {
    var date = new Date();

    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }

    var currentTime = hours + ":" + minutes + ":" + seconds;
    $('#hour').empty().append(
        $('<p class="text-center" style="font-size: 20px;">' + currentTime + '</p>')
    );
}