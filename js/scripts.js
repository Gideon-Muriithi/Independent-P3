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
  $(function(){
    $("img.hoverEffect").hover(
    function() {
      $(this).stop().animate({"opacity": "0"}, 350);
    },
    function() {
      $(this).stop().animate({"opacity": "1"}, 350);
    });
  });
  $("#formbox").submit(function(event) {
       var person1Input = $("input#name").val();
        $(".person").append(person1Input);

       $("#messageReceipt").show();

      event.preventDefault();
  });
});
