$(function(){

  var quoteSpace = $("#quote");
  var quotes = new Array(10);

  for(var i = 0; i < 10; i++){
    quotes[i] = "Hello there " + i;
  }

  quoteSpace.html(quotes[Math.floor(Math.random()*10)]);


  var quoteSpace = $("#blog");

  quoteSpace.html("New Blog Post is: Basic Blog posted on January 2018");

});
