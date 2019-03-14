$(function(){

  var quoteSpace = $("#quote");
  var quotes = new Array(10);

  console.log(quoteSpace.html());

  for(var i = 0; i < 10; i++){
    quotes[i] = "Hello there " + i;
  }

  quoteSpace.html(quotes[Math.floor(Math.random()*10)]);

});
