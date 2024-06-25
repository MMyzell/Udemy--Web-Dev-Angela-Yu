var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio('./sounds/tom-3.mp3');
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play();
                break;

            case "j":
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
                break;

            case "k":
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
                break;

            case "l":
                var kick = new Audio('./sounds/kick-bass.mp3');
                kick.play();
                break;
            

            default: console.log(buttonInnerHTML);
        }

    });

}





/*
var audioTom_1 = new Audio('./sounds/tom-1.mp3');
audioTom_1.play();
*/



/*
document.querySelector("button.w.drum").addEventListener("click", function () {
    alert("W got clicked");
});

document.querySelector("button.a.drum").addEventListener("click", function () {
    alert("A got clicked");
});

document.querySelector("button.s.drum").addEventListener("click", function () {
    alert("S got clicked");
});

document.querySelector("button.d.drum").addEventListener("click", function () {
    alert("D got clicked");
});

document.querySelector("button.j.drum").addEventListener("click", function () {
    alert("J got clicked");
});

document.querySelector("button.k.drum").addEventListener("click", function () {
    alert("K got clicked");
});

document.querySelector("button.l.drum").addEventListener("click", function () {
    alert("L got clicked");
});
*/
