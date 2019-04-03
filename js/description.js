$(document).ready(function(){
  $(".flex-item").click(function(option){
    var buttonPressed = ( $( this ).text());

    $(".flex-item").each(function(index){
      $( this ).removeClass("active");
    })

    $( this ).addClass("active");

    $(".panel").each(function(index){
       if(buttonPressed != $( this ).text().trim()){
       $( this ).css("display", "none");
     }else{
       $( this ).css("display", "");

     }
    })

  });
})
