$(".light_on").click(function() {
    $("header").css("background-image", "url(\"images/light_on_wo_box.jpg\")");
});

$(".light_off").click(function() {
    $("header").css("background-image", "none");
    $(".boxes").css("display", "none");
});

$(".box_on").click(function() {
    $(".boxes").css("display", "block");
});

$(".box_off").click(function() {
    $(".boxes").css("display", "none");
});

$(".light_on_under").click(function() {
    $("main").css("background-image", "url(\"images/underground2.jpg\")");
});

$(".light_offon_under").click(function() {
    $("main").css("background-image", "none");
});