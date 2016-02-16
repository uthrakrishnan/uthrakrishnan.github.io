/*$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
*/


$(document).ready(function(){
  $('ul#social li a').hover(function(){
    $(this).css({width:"125%",height:"125%"});
},function(){
    $(this).css({width:"100%",height:"100%"});   
});




  /*  stop().animate({ imageSize: '120%'}, 250);
    }, function(){
      $(this).stop().animate({ imageSize: '100%'}, 250);
  });
});
  