// API KEY = 0ce61301551b4d8bb8d8bb6621bd7af4

function addSportPanel() {

    videoSubject = "";

    if (!isPanelExist('panel-sport')) {
        addPanel('Sport', 'sport');
        setSportToPanel();
    }
    else {
        var photoPanel = $('#panel-sport');
        if (photoPanel.css('display') == 'none') {
            photoPanel.show(500);
        }
    }
}

function setSportToPanel() {

    $.ajax({
        headers: { 'X-Auth-Token': '0ce61301551b4d8bb8d8bb6621bd7af4' },
        url: 'http://api.football-data.org/v1/teams/4',
        dataType: 'json',
        type: 'GET'
    }).done(function(response) {
        alert(response.code + " " + response.name + " " + response.squadMarketValue + " " + response.crestUrl);
    });


    $('#sport').empty().append(
        $('' +
            '' +
            '' +
            '' +
            '' +
            '' +
            '' +
            '' +
            '')
    );
}