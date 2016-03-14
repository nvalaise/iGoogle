/**
 * Created by maxime on 14/03/2016.
 */
function addTwitterPanel() {
    if (!isPanelExist('panel-twitter')) {
        addPanel('Tweets de @MichelBillaud', 'twitter');
        addMichelBillaudTweets();
    }
    else {
        var twitterPanel = $('#panel-twitter');
        if (twitterPanel.css('display') == 'none') {
            twitterPanel.show(500);
        }
    }


}

function addMichelBillaudTweets() {
    $('#twitter').empty().append('<a class="twitter-timeline" href="https://twitter.com/MichelBillaud"' +
        ' data-widget-id="709480084445511680">Tweets de @MichelBillaud</a>' + ' <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>');

}