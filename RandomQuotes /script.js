document.getElementById("date").innerHTML = Date();
$(document).ready ( function(){
//quotes variable
var quotes = [
  {
  quote:"if you are always trying to be normal, you will never know how amazing you can be.", 
  author: "Dr Maya Angelou"
},
  
 { quote: "A bird doesn't sing because it has an answer, it sings because it has a song.",
    author: "Dr Maya Angelou"},
  
  {quote:"There is no greater agony than bearing an untold story inside you.",
    author: "Dr Maya Angelou"
  },
  {quote:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
   author: "Dr Maya Angelou"
  },
    
  {quote:"When you learn, teach When you get, give.",
      author: "Dr Maya Angelou"},
     
  {quote:"Courage is the most important of all the virtures because without courage, you can't practice any other virture consistency.",
       author: "Dr Maya Angelou"},
   
  {quote:"Success is liking yourself, liking what you do, and liking how you do it.",
     author:"Dr Maya Angelou"
  }
  ];
//to set date
document.getElementById("date").innerHTML = Date();

//to generate the random quotes
function entireQuotes() {
var randomQuotes =Math.floor(Math.random() * quotes.length);
//to display the quotes*/
  $("#quotesText").text(quotes[randomQuotes].quote); 
   $("#authorText").text(quotes[randomQuotes].author); 
}
  //entireQuotes();
$("#newQuote").on("click",entireQuotes);
  
  $("#tweetQuote").on("click", function() {
var myQuote = $("#quotesText").html();
window.open("https://twitter.com/intent/tweet?url=www.twitter.com/&text="+myQuote);
  }); 
 });