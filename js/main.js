let clockEl = document.getElementById("clockDiv");
let msg = document.getElementById("welcome-msg");
checkFirstTime()

function getClockTime() {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();

    hr = ("0" + hr).slice(-2);
    min = ("0" + min).slice(-2);

    function getDayZone() {
        if (hr < 12) {
            return "morning";
        } else if (hr < 18) {
            return "afternoon";
        } else {
            return "evening";
        }
    }

    clockEl.innerHTML = `${hr}:${min}`;
    msg.innerHTML = `Good ${getDayZone()} ${localStorage.getItem("username")} ${localStorage.getItem("lang")}`
}
function checkFirstTime(){
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("username") === null) {
            location.href = 'name.html';
        }
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
    }
setInterval(getClockTime, 0);
