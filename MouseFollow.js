$(()=>{

    $("html").click(function(event) {
        $("#mouse").text(event.pageX + " ; " +event.pageY);
    });

});