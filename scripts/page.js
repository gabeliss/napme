var audio = new Audio('sounds/classic.wav');
document.getElementById("classic").src = "img/alarm.png"

function playSound(id) {

    if (id == "classic") {
        document.getElementById("classic").src = "img/alarm.png";
        document.getElementById("birds").src = "img/play-button.png";
        document.getElementById("rain").src = "img/play-button.png";
        document.getElementById("flute").src = "img/play-button.png";
        document.getElementById("crowd").src = "img/play-button.png";

        audio.pause();
        audio.currentTime = 0;
        audio = new Audio('sounds/classic.wav');
        audio.play();
        localStorage.setItem("alarmSound", "sounds/classic.wav");
    }
    else if (id == "birds") {
        document.getElementById("classic").src = "img/play-button.png";
        document.getElementById("birds").src = "img/alarm.png";
        document.getElementById("rain").src = "img/play-button.png";
        document.getElementById("flute").src = "img/play-button.png";
        document.getElementById("crowd").src = "img/play-button.png";

        audio.pause();
        audio.currentTime = 0;
        audio = new Audio('sounds/birds.wav');
        audio.play();
        localStorage.setItem("alarmSound", "sounds/birds.wav");
    }
    else if (id == "rain") {
        document.getElementById("classic").src = "img/play-button.png";
        document.getElementById("birds").src = "img/play-button.png";
        document.getElementById("rain").src = "img/alarm.png";
        document.getElementById("flute").src = "img/play-button.png";
        document.getElementById("crowd").src = "img/play-button.png";

        audio.pause();
        audio.currentTime = 0;
        audio = new Audio('sounds/rain.wav');
        audio.play();
        localStorage.setItem("alarmSound", "sounds/rain.wav");
    }
    else if (id == "flute") {
        document.getElementById("classic").src = "img/play-button.png";
        document.getElementById("birds").src = "img/play-button.png";
        document.getElementById("rain").src = "img/play-button.png";
        document.getElementById("flute").src = "img/alarm.png";
        document.getElementById("crowd").src = "img/play-button.png";
        
        audio.pause();
        audio.currentTime = 0;
        audio = new Audio('sounds/flute.wav');
        audio.play();
        localStorage.setItem("alarmSound", "sounds/flute.wav");
    }
    else if (id == "crowd") {
        document.getElementById("classic").src = "img/play-button.png";
        document.getElementById("birds").src = "img/play-button.png";
        document.getElementById("rain").src = "img/play-button.png";
        document.getElementById("flute").src = "img/play-button.png";
        document.getElementById("crowd").src = "img/alarm.png";

        audio.pause();
        audio.currentTime = 0;
        audio = new Audio('sounds/crowd.wav');
        audio.play();
        localStorage.setItem("alarmSound", "sounds/crowd.wav");
    }


}

function setSnooze(id){

    if( id == "5min"){
        document.getElementById(id).style.color = "green";
        document.getElementById("10min").style.color = "white";
        document.getElementById("15min").style.color = "white";
        localStorage.setItem("snoozeTime", 5);
    }
    else if (id == "10min") {
        document.getElementById(id).style.color = "green";
        document.getElementById("5min").style.color = "white";
        document.getElementById("15min").style.color = "white";
        localStorage.setItem("snoozeTime", 10);
    } 
    else if (id == "15min") {
        document.getElementById(id).style.color = "green";
        document.getElementById("10min").style.color = "white";
        document.getElementById("5min").style.color = "white";
        localStorage.setItem("snoozeTime", 15);
    }
    
}

function setNapLength() {
    let customNapLength = prompt("Please enter your nap time in minutes:", "");
    var numLength = parseInt(customNapLength);
    setTimeout(function(){
        window.location.href = "timerPage.html?"+numLength;
     }, 1);
    localStorage.setItem("customNapLength", numLength);
}
