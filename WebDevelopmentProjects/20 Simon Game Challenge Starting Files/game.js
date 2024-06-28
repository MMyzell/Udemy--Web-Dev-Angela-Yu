var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);


var audioBlue = $('./sounds/blue.mp3');
var audioGreen = $('./sounds/green.mp3');
var audioRed = $('./sounds/red.mp3');
var audioYellow = $('./sounds/yellow.mp3');

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


function playNoise() {
    switch (randomChosenColour) {
        case 'blue':
            audioBlue.play();
        case 'green':
            audioGreen.play();
        case 'red':
            audioRed.play();
        case 'yellow':
            audioYellow.play();
           
    }
    
};





$("button").on("click", function() {
    $("#my-audio").play()
});











