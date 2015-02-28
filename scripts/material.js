//All MaterialCordova code will be moved here soon!
var parent, ink, d, x, y;
$("dpi").click(function (e) {
    parent = $(this).parent();
    if ($(this).children("ripple").length == 0)
        $(this).prepend("<ripple></ripple>");

    ink = $(this).children("ripple");
    ink.removeClass("animate");

    if (!ink.height() && !ink.width()) {
        d = Math.max(parent.outerWidth(), parent.outerHeight());
        ink.css({ height: d, width: d });
    }

    x = e.pageX - parent.offset().left - ink.width() / 2;
    y = e.pageY - parent.offset().top - ink.height() / 2;

    ink.css({ top: y + 'px', left: x + 'px' }).addClass("animate");
})