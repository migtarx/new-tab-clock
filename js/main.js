let clockEl = document.getElementById("clockDiv");
let msg = document.getElementById("welcome-msg");

function getClockTime() {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    //let sec = date.getSeconds(); //Uncomment for adding secs to the clock

    hr = ("0" + hr).slice(-2);
    min = ("0" + min).slice(-2);
    //sec = ("0" + sec).slice(-2); //Uncomment for adding secs to the clock

    function getDayZone() {
        if (hr < 12) {
            return "morning";
        } else if (hr < 18) {
            return "afternoon";
        } else {
            return "evening";
        }
    }

    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    clockEl.innerHTML = `${hr}:${min}`; //replace with `${hr}:${min}:${sec}` for adding seconds to teh clock
    postData("../config.json", {
        answer: 42
    })
    .then(data => {
        msg.innerHTML = `Good ${getDayZone()} ${data.name}`
    });
}
setInterval(getClockTime, 0);