$(function(){
  $("#start").click(function(){
    $("#p1").parents(".special").css("border-color", "green");
    $("#div1").children().css("border-color", "fuchsia");
    $("#main").find("p").css("border-color", "blue");
    $("#p1").siblings().css("border-color", "gray"); //frères
    $("#p1").next().css("border-color", "green"); //frères
  });
});
