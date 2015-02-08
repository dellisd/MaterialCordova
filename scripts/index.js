﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();
$('#menu').click(function () {
    $('menu, scrim').addClass('open')
})
$('scrim').click(function () {
    $('menu, scrim').removeClass('open');
});
$('#search').click(function () {
    $('#first').toggleClass('search');
    $('#second').removeClass('none');
    $('#second, #primary').toggleClass('search');
    $('#search-input').focus();
    $('#main, #results').toggleClass('search');
});
$('#back').click(function () {
    $('#first').toggleClass('search');
    $('#second, #primary').toggleClass('search');
    $('#search-input').val('');
    setTimeout(function () { $('#second').addClass('none') }, 500);
    routes = "";
    stops = "";
    $('#results ul').delay(500).html('<li class="pre"><a>Search<sub>Enter a route number, or a 4-digit stop number</sub></a></li>')
    $('#main, #results').toggleClass('search');
})
$('#search-clear').click(function () {
    if ($('#search-input').val() == "") {
        $('#first').toggleClass('search')
        $('#second, #primary').toggleClass('search')
        setTimeout(function () { $('#second').addClass('none') }, 500);
        routes = ""
        stops = ""
        $('#results ul').html('<li class="pre"><a>Search<sub>Enter a route number, or a 4-digit stop number</sub></a></li>')
        $('#main, #results').toggleClass('search')
    } else {
        $('#search-input').val('').focus()
        $('#results ul').html('<li class="pre"><a>Search<sub>Enter a route number, or a 4-digit stop number</sub></a></li>')
    }
})
function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}