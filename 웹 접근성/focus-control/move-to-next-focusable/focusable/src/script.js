clickFocus = function(e){
    idx = $( "input, button, a" ).toArray().indexOf(e.currentTarget)
    $("input, button, a")[idx+1].focus()
    $("#test").css("display", "none");
}

$( "button#test" ).on("click", clickFocus);