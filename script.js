/*$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
*/


$(document).ready(function(){
  $('ul#social li a').hover(function(){
    $(this).stop().animate({ marginTop: '-10px'},250);
    }, function(){
      $(this).stop().animate({marginTop: '0px'}, 250);
  });

});
  