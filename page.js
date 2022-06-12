$(function() {
    $(".item").on("click", function() {
        $(".item").removeClass("change").children("a").css("color", "#56c4c5");
        $(this).toggleClass("change");
        $(".itme").children("a").addClass("item_color");
        $(this).children("a").css("color", "#fff");

    })

})