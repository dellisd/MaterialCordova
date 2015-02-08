// For an introduction to the Blank template, see the following documentation:
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
$('#bottom').click(function () {
    var h = screen.height
    var bh = $('bottom-sheet').height()
    var oh = h - bh
    $('bottom-sheet').css('top', oh)
    $('bottom-scrim').toggleClass('open')
})
$('bottom-scrim').click(function () {
    $('bottom-scrim').toggleClass('open')
    $('bottom-sheet').css('top', '100%')
})
$('#menu').click(function () {
    $('menu').attr('style', '')
    setTimeout(function(){$('menu').addClass('nt')}, 500)
    var w = $('menu').width()
    md = false
    $('menu, menu-scrim').addClass('open')
    $('menu').draggable({ 
        axis: "x",
        containment: [-600, 0, 0, 0],
        stop: function (e, ui) {
            if ((300 - (ui.offset.left * -1)) > (w / 2)) {
                $(this).animate({ left: 0 }, 500)
            }
            else {
                $('menu').draggable("destroy")
                md = true
                $(this).animate({ left: (w * -1) }, 500)
                $('menu-scrim').click()
            }
        }
        });
})
$('menu-scrim').click(function () {
    $('menu, menu-scrim').removeClass('open');
    $('menu').removeClass('nt')
    if (!md) {
        $('menu').draggable("destroy")
    }
    
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