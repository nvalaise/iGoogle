/**
 * Created by maxime on 14/03/2016.
 */
function addYoutubePanel() {

    videoSubject = "";

    if (!isPanelExist('panel-youtube')) {
        if (selectVideoSubject()) {
            addPanel('Youtube', 'youtube');
            setVideoToPanel();
        }
    }
    else {
        var youtubePanel = $('#panel-youtube');
        if (youtubePanel.css('display') == 'none') {
            if (selectVideoSubject()) {
                youtubePanel.show(500);
                setVideoToPanel();
            }
        }
    }
}

function selectVideoSubject() {

    var result = prompt("Choisir le sujet de la vidéo : ", "Chat");

    var showPanel = true;

    if (result == null) {
        showPanel = false;
        $('#error').empty().append('Le sujet de la vidéo est nul !').show(500).delay(2000).fadeOut(500);
    }
    else {
        videoSubject = result;
    }

    return showPanel;
}

function setVideoToPanel() {
    $('#youtube').empty().append(
        $('<iframe id="ytplayer" type="text/html" width="100%"' +
            ' src="http://www.youtube.com/embed?listType=search&list=' + videoSubject + '" frameborder="0" />')
    );
}