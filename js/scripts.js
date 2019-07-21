$(document).ready(function(){
  $(".clickable").click(function(){
    $(".toggle").toggle();
    $("#text-hidden").show();
  });
  $(".clickable1").click(function(){
    $(".toggle1").toggle();
    $("#text-hidden1").show();
  });
  $(".clickable2").click(function(){
    $(".toggle2").toggle();
    $("#text-hidden2").show();
  });
  $(".cont img ").each(function(){
   $(this).hover(function(){
     $(this).addClass("reduceOpacity");
     $(this).siblings(":last").show();
     },function(){
       $(this).removeClass("reduceOpacity");
       $(this).siblings(":last").hide();
     });

});
