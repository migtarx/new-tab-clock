let clockEl = document.getElementById("clockDiv");
let msg = document.getElementById("welcome-msg");

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

    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    clockEl.innerHTML = `${hr}:${min}`;
    postData("../config.json", {
        answer: 42
    })
    .then(data => {
        msg.innerHTML = `Good ${getDayZone()} ${data.name}`
    });
}
setInterval(getClockTime, 0);
