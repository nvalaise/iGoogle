/**
 * Created by maxime on 14/03/2016.
 */

function addPanel(title, id) {
    $('#panels')
        .append(
            $('<div class="col-md-3" id="panel-' + id + '"></div>').append(
                $('<div class="panel panel-info"></div>')
                    .append(
                        $('<div class="panel-heading"></div>')
                            .append($('<div class="pull-right"></div>')
                                .append($('<a href="#" onclick="deletePanel(\'' + id + '\')"></a>')
                                    .append('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>')
                                )
                            )
                            .append('<h4 class="text-center">' + title + '</h4>'))
                    .append(
                        $('<div class="panel-body" id="' + id + '"></div>')
                    )
            )
        ).hide()
        .show(500);

}

function isPanelExist(id) {
    return $("#" + id).length > 0;
}

function deletePanel(id) {
    if (id == 'hour') {
        clearInterval(getCurrentTime);
    }
    $("#panel-" + id).hide(500);
}