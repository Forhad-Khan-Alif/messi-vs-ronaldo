$(document).ready(function (){
  $("#messi img").click(function(){
    $(".player_info:first").fadeToggle();
  });

  // ================6m5v: events ^ ======================
  // $("#messi img").dbclick(function(){
  //   $(".player_info:first").fadeToggle();
  // });

  // $("#voting").submit(function(){
  //   alert('Thank you for voting!');
  // });
  $("#voting").submit(function(){
    $("#voting_form").prepend("<div class='alert alert-success' role='alert'>Thank you "+
    $('#voting_form input[name="name"]').val() +", for your vote!</div>");
    $('#voting').remove();

    return false;
  });

// ================6m6v: css manupulation======================
  $('tr').dblclick(function(){
    $(this).css({"background": "black", "color": "white"});
  });

  // ================6m7v: traversing the dom======================
  // $("#messi").parent().before('<h2 class="text-center">Messi vs. Ronaldo</h2>');
  // $("#messi").find('strong').remove();

});

// ====================================================6m3v: Syntax And Selectors======(1. jQuery lekhar syntax ba niyom: ($(document).ready(function (){jQuery methods go here....});))=====================
// $(document).ready(function (){
//   jQuery methods go here....
// });

// ====================================================6m3v: Syntax And Selectors======(1. jQuery hide method) - (likhe voting form id ke hide kortesi)=====================
