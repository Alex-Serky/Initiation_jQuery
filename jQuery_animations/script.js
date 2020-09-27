$(function(){

  $("#start").click(function(){
    $("div").animate({
        left: '600px',
        opacity: 0.5,
        width: '+=150px',
        height: '+=150px',
      }, 5500);
    });

  $("#start").click(function(){
    $("div1").animate({left: '600px'}, 2500);
    $("div1").animate({opacity: 0.2}, 2500);
    $("div1").animate({width: '200px'}, 2500);
    $("div1").animate({height: '200px'}, 2500, function(){
      $("div1").hide();
    });
  });

  $("#start").click(function(){
    $("div").slideUp(1000).sildeDown(1000).fadeOut(1000).fadeIn(1000);
  });

  $("#stop").click(function(){
    $("div").stop();
  });

  $("#stop").click(function(){
    $("div1").stop();
  });


});
