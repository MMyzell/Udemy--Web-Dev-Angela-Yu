
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + userChosenColour + ".mp3");
  audio.play();

  if (userClickedPattern == gamePattern) {
    nextSequence();
  }

});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

// Start game with the "A" key
$(document).keydown(function(event) {
  console.log(event.key);
  if (event.key == "a" || event.key == "A") {
    gamePattern = [];
    userClickedPattern = [];
    nextSequence();
  };

});





