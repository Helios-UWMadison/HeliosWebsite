$(function(){

  var quoteSpace = $("#quote");
  var quotes = new Array(17);

  quotes[0] = "Better safe than sorry"
  quotes[1] = "Let's do it!"
  quotes[2] = "Live, Laugh, Love"
  quotes[3] = "Death before Dishonor"
  quotes[4] = "'slizzard' (~like a G6)"
  quotes[5] = "The clearest way into the Universe is through a forest wilderness. -John Muir"
  quotes[6] = "Run fast enough to get there, but slow enough to see"
  quotes[7] = "Fuck it"
  quotes[8] = "I live for sustainability"
  quotes[9] = "Thoughts become things"
  quotes[10] = "It be like that sometimes"
  quotes[11] = "All our dreams can come true, if we have the courage to persue them --Walt disney"
  quotes[12] = "Make it Times New Roman"
  quotes[13] = "Say that again?"
  quotes[14] = "Do what others won’t do so you can do what they can’t later."
  quotes[15] = "Yes"
  quotes[16] = "Be purposeful"

  quoteSpace.html(quotes[Math.floor(Math.random()*Math.floor(17))]);


  var quoteSpace = $("#blog");

  quoteSpace.html("New Blog Post is: Basic Blog posted on January 2018");

});
