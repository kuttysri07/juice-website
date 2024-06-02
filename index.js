
$(".container2").waypoint(function(){
    $(".box1").addClass("animate__animated animate__slideInUp");
    $(".box2").addClass("animate__animated animate__slideInUp");
    $(".con").addClass("animate__animated animate__slideInUp");
    $(".pic").addClass("animate__animated animate__fadeInRight");
},{offset:"80%"});

$(".container3").waypoint(function(){
    $(".photo5").addClass("animate__animated animate__fadeInDown");
    $(".photo6").addClass("animate__animated animate__fadeInUp");
    $(".con2").addClass("animate__animated animate__fadeInUp");
    $(".t1").addClass("animate__animated animate__fadeInUp");
    $(".t2").addClass("animate__animated animate__fadeInUp");
},{offset:"60%"});

$(".container4").waypoint(function(){
    $(".p1").addClass("animate__animated animate__fadeInDown");
    $(".p2").addClass("animate__animated animate__zoomInRight");
    $(".p3").addClass("animate__animated animate__zoomInUp");
},{offset:"50%"});