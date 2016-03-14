/**
 * Created by maxime on 14/03/2016.
 */

function addPanel(title, id) {
    $('#panel')
        .append(
            $('<div class="col-md-4"></div>').append(
                $('<div class="panel panel-info"></div>')
                    .append('<div class="panel-heading"><h4 class="text-center">' + title + '</h4></div>')
                    .append(
                        $('<div class="panel-body" id="' + id + '"></div>')
                    )
            )
        );
}

function addPanelHour() {
    addPanel('Heure', 'hour');

    setInterval(function () {
        getTime()
    }, 1000);
}

function getTime() {
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $('#hour').empty().append(
        $('<p class="text-center" style="font-size: 20px;">' + time + '</p>')
    );
}