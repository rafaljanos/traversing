$(document).ready(function(){
    $(".theButton").click(function(){
        var colour = $(this).css("background-color");
        $(".superButton").css("color", colour);

    });
});