//learning js

var displayName = "Ally Levine"
var age = 21;
var favoriteFood = "sushi";
var outputText = "This is " + displayName + ". She is " + age + ". ";
outputText += "Her favorite food is " + favoriteFood + ". ";


  document.getElementById("date").innerHTML = Date();
  document.getElementById('head1').innerHTML = "Hello, Ally";


function placeText(){
  document.getElementById('info').innerHTML = outputText;
}
