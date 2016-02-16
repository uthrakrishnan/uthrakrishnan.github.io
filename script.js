/*$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
*/


$(document).ready(function(){
  $('a').hover(function(){
    $(this).stop().animate({ marginTop: '-10px'}, 250);
    }, function(){
      $(this).stop().animate({marginTop: '0px'}, 250);
  });
});
  