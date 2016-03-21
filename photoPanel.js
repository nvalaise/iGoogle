/**
 * Created by maxime on 14/03/2016.
 */
function addPhotoPanel() {

    videoSubject = "";

    if (!isPanelExist('panel-photo')) {
        if (selectPhotoSubject()) {
            addPanel('Photo', 'photo');
            setPhotoToPanel();
        }
    }
    else {
        var photoPanel = $('#panel-photo');
        if (photoPanel.css('display') == 'none') {
            if (selectPhotoSubject()) {
                photoPanel.show(500);
                setPhotoToPanel();
            }
        }
    }
}

function selectPhotoSubject() {

    var result = prompt("Choisir le sujet de la photo : ", "Chat");

    var showPanel = true;

    if (result == null) {
        showPanel = false;
        $('#error').empty().append('Le sujet de la photo est nul !').show(500).delay(2000).fadeOut(500);
    }
    else {
        videoSubject = result;
    }

    return showPanel;
}

function setPhotoToPanel() {

    var image_url = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=4d980d6e23311c22834a53a240ee0b18&format=json&tags=" + videoSubject;

    $.ajax({
        url: image_url
    }).done(function (result) {
        jsonFlickrApi(result);
    });

}

function jsonFlickrApi(rsp) {

    var total = rsp.photos.perpage;
    var rang_aleat = Math.floor(Math.random() * total);
    var photo = rsp.photos.photo[rang_aleat];
    
    if(rsp.stat == "ok") {

        var image = "https://farm" + photo.farm +
            ".staticflickr.com/" + photo.server +
            "/" + photo.id +
            "_" + photo.secret +
            ".jpg;";

        $('#photo').empty().append(
            $("<img src='"+ image + "' style='width: 100%'>")
        );
    }
}