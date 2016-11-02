function closePhone() {
    $('.caller').addClass("hide");
    $('.phone').addClass("show");
}

function openPhone() {
    $('.caller').removeClass("hide");
    $('.phone').removeClass("show");
}




window.onmousemove = function(event){
    
    var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
    //console.log(document.getElementsByTagName('body')[0].clientWidth);
    var screenWidth = document.getElementsByTagName('body')[0].clientWidth;
    $(".moss").css("opacity", .7 - event.pageX / screenWidth );
};