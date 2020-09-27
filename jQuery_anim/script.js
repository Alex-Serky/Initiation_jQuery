$(function(){
  $("#start").click(function(){
    // var myVar = $("#p10").text(); //Permet de changer les éléments html
    // var myVar = $("#p10").html();  //Permet de changer les éléments html
    // var myVar = $("div").html();
    var myVar = $("div").attr("style");  //Permet de changer les éléments html
    //var myVar = $("#myInput").val();  //Permet de changer les éléments html
    console.log(myVar);

    $("#p10").text("Voilà mon nouveau texte.");
    $("#myInput").val("Nouvelle valeur.");

    $("div").append("<p>Mon nouveau Paragraphe</p>"); //Attacher un nouveau élément au paragraphe.
    $("div").prepend("<p>Mon deuxième nouveau Paragraphe</p>");
    $("div").after("<p>Mon troisième nouveau Paragraphe</p>");
    $("div").before("<p>Mon Paragraphe</p>");
    $("#p12").remove(); //Pour supprimer et empty pour vider le contenu.

    $("#p11, #p2").addClass("purple bold");

    $("#p1").css({
      "color": "red",
      "font-weight": "bold",
      "background": "fuchsia"
    });

  });

});



$(function(){

  // $("#p1").click(function(){  //On clique sur p1 pour faire disparaître p5.
  //   $("#p5").hide();
  //   });
  // $("#p1").mouseenter(function(){ //On survole p1, on fait disparaître p5
  //   $("#p5").hide();
  //   });
  // $("#p1").mouseleave(function(){  //On sort de p1, p5 réapparaît.
  //   $("#p5").show();
  // });

  //une seule fonction pour jouer le même rôle.
  $("#p2").hover(function(){
    $("#p4").hide("slow");
  },
  function(){
    $("#p4").show(5000);
  });

  // On peut faire aussi la même chose avec les objets.
  $("#p1").on({
    mouseenter: function(){
      $("#p5").hide();
    },
    mouseleave: function(){
      $("#p5").show();
    },
    click: function(){
      $("#p3").hide();
    }
  });

  //On peut aussi utiliser une méthode par cascade : fonction callback
  $("#p1").click(function(){
    $("#p6").hide(2000, function(){
      $("#p7").hide(2000, function(){
        $("#p8").hide(2000);
      });
    });
  });

  //Utilisation de toggle pour faire disparaître et réapparaître un élément.
  $("#p2").click(function(){
    $("#p7").toggle();
  });

//
  $("#p8").fadeOut();
  $("#p3").click(function(){
    $("#p8").fadeIn(3000);
  });

  //
  $("#p3").click(function(){
    $("#p9").fadeToggle(3000);
  });

});
