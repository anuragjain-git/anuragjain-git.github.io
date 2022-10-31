$(".developer").mouseenter(function abc(){
    $(this).hide();
    $(".designer").show();
});

$(".front-end").mouseenter(function (){
    $(".developer").show();
    $(".designer").hide();
});