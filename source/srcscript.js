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

      /*
  * Cloudinary jQuery/JS Dynamic Images
  */

  (function () {

    var bG = 'http://res.cloudinary.com/mobilecreature/image/upload/f_auto/v1456547839/FreeCodeCamp/Ziplines/Pomodoro-Timer/IeZm7MT.jpg';

    var cBg = 'IeZm7MT.jpg';

    $.cloudinary.config(
      {
        cloud_name: 'mobilecreature',
        api_key: '222854649779236'
      }
    );

});
