$(document).ready(function () {
    alert("Testing");

    var classes = ["circle1", "circle2", "circle3", "circle4", "circle5", "circle6"];
    var classes1 = ["circle2", "circle3", "circle4", "circle5", "circle6"];
    var classes2 = ["circle1", "circle3", "circle4", "circle5", "circle6"];
    var classes3 = ["circle1", "circle2", "circle4", "circle5", "circle6"];
    var classes4 = ["circle1", "circle2", "circle3", "circle5", "circle6"];
    var classes5 = ["circle1", "circle2", "circle3", "circle4", "circle6"];
    var classes6 = ["circle1", "circle2", "circle3", "circle4", "circle5"];

    $(".circle").each(function () {
        $(this).addClass(classes[Math.floor(Math.random() * classes.length)]);
        $(this).removeClass("circle");
    });

    $(".circle1").mouseenter(function () {
        $("#note1").get(0).play();
    });
    $(".circle1").mouseleave(function () {
        $(this).addClass(classes1[Math.floor(Math.random() * classes1.length)]);
        $(this).removeClass("circle1");
    })
        
        
    

    $(".circle2").mouseenter(function () {
        
        $("#note2").get(0).play();
        
        $(this).addClass(classes2[Math.floor(Math.random() * classes2.length)]);
        $(this).removeClass("circle2");
        
    });

    $(".circle3").mouseenter(function () {
        $("#note3").get(0).play();
        $(this).addClass(classes3[Math.floor(Math.random() * classes3.length)]);
        $(this).removeClass("circle3");
        
    });

    $(".circle4").mouseenter(function () {
        
        $("#note4").get(0).play();
        
        $(this).addClass(classes4[Math.floor(Math.random() * classes4.length)]);
        $(this).removeClass("circle4");
        
    });

    $(".circle5").mouseenter(function () {
        
        $("#note5").get(0).play();
        
        $(this).addClass(classes5[Math.floor(Math.random() * classes5.length)]);
        $(this).removeClass("circle5");
        
    });

    $(".circle6").mouseenter(function () {

        $("#note6").get(0).play();
        $(this).addClass(classes6[Math.floor(Math.random() * classes6.length)]);
        (this).removeClass("circle6");
        
    });
})