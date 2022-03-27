const langData = [['Buenos días','Buenas tardes','Buenas noches'],['Egun on','Arratsalde on','Gau on'],['Good morning','Good afternoon','Good evening']]
var clockEl = document.getElementById("clockDiv");
var msg = document.getElementById("welcome-msg");
checkFirstTime()

function getClockTime() {
    var date = new Date();

    var hr = date.getHours();
    var min = date.getMinutes();

    hr = ("0" + hr).slice(-2);
    min = ("0" + min).slice(-2);

    function getDayZone() {
        if (hr < 12) {
            return langData[localStorage.getItem("lang")][0];
        } else if (hr < 18) {
            return langData[localStorage.getItem("lang")][1];
        } else {
            return langData[localStorage.getItem("lang")][2];
        }
    }

    clockEl.innerHTML = `${hr}:${min}`;
    msg.innerHTML = `${getDayZone()} ${localStorage.getItem("username")}`
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
