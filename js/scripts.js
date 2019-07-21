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
  $(".hoverEffect").each(function(){
   // $(this).val($(this).data("name"));
   $(this).hover(function(){
     $(this).show();
     $(this).siblings(":first").addClass("reduceOpacity");
   });
   });
  $("#formbox").submit(function(event) {
       var person1Input = $("input#name").val();
        $(".person").append(person1Input);

       $("#messageReceipt").show();

      event.preventDefault();
  });
});
