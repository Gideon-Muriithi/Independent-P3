$(document).ready(function(){
  $(".clickable").click(function(){
    $(".toggle").toggle();
    $("#text-hidden").show();
  });
  $(".clickable1").click(function(){
    $(".toggle1").toggle();
    $("#text-hidden1").show();
  });

});
