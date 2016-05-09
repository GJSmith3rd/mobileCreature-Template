/* global $ */

$(document).ready(function() {

    var stopGoogleAds = false;

    //Test for local dev network
    if (/^10.0.0/.test(location.hostname) && stopGoogleAds) {

        // Remove Adsense from DOM
        $('.adsense').remove();

    } else {

        // Load Adsense JavaScript
        $.getScript('//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
    }

});
