function black() {
    document.getElementById("watchpica").src = "https://i.imgur.com/iOeUBV7.png";
}

function blue() {
    document.getElementById("watchpica").src = "https://i.imgur.com/Mplj1YR.png";
}

function pink() {
    document.getElementById("watchpica").src = "https://i.imgur.com/Zygu7I3.png";
}

function purple() {
    document.getElementById("watchpica").src = "https://i.imgur.com/xSIK4M8.png";
}



function clockg() {
    setInterval(() => {
        var currentTime = new Date();

        var currentHours = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        var currentSeconds = currentTime.getSeconds();

        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

        var timeOfDay = (currentHours < 12) ? "AM" : "PM";

        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

        currentHours = (currentHours == 0) ? 12 : currentHours;


        var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

        var element = document.getElementById("time");
        element.className = "g";
        element.innerHTML = currentTimeString;

    }, 500);
}

function heartrate() {
    var img = document.getElementById("heart");
    img.classList.remove("d-none");
    var time = document.getElementById("time");
    time.classList.add("sara");

}

function clock() {

    var img = document.getElementById("heart");
    img.classList.add("d-none");
    var time = document.getElementById("time");
    time.classList.remove("d-none");


}