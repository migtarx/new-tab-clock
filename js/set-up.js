var elementIsClicked = false;
var inputSelectedLang = document.getElementById("selectedLang");
var selectedLang = -1;
checkFirstTime()
inputSelectedLang.disabled = true;


// NAME SELECTION SCREEN
function clickConfirm() {
    elementIsClicked = true;
    var input_name = document.getElementById("username");
    if (input_name.value == "") {
        input_name.classList.add("error-shake");
        setTimeout(function() {
            input_name.classList.remove("error-shake");
        }, 1000);
    } else {
        localStorage.setItem("username", document.getElementById("username").value);
        document.getElementById("pick-username").style.display = "none";
        document.getElementById("pick-username2").style.display = "block";
    }
}
var element = document.getElementById("confirm");
element.addEventListener("click", clickConfirm);


// LANG SELECTION SCREEN
var langBtns = document.getElementsByClassName("lang");
for (var i = 0; i < langBtns.length; i++) {
    langBtns[i].addEventListener('click', function(event) {
        switch (event.target.innerHTML) {
            case "ES":
                inputSelectedLang.setAttribute('value', "Has selecionado Español");
                selectedLang = 0;
                break;
            case "EU":
                inputSelectedLang.setAttribute('value', "Euskara hautatu duzu");
                selectedLang = 1;
                break;
            default:
                inputSelectedLang.setAttribute('value', "You have selected English");
                selectedLang = 2;
                break;
        }
    })
}

function clickConfirmLang() {
    elementIsClicked = true;
    var inputLang = document.getElementById("selectedLang");
    if (inputLang.value == "" || inputLang.value == "Select your prefered language") {
        inputLang.classList.add("error-shake");
        inputSelectedLang.setAttribute('value', "Select your prefered language");
        setTimeout(function() {
            inputLang.classList.remove("error-shake");
        }, 1000);
    } else {
        localStorage.setItem("lang", selectedLang);
        location.href = "index.html";
    }
}

function checkFirstTime(){
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("username") === null) {
            document.title = "New Tab - First set up";
            document.getElementById("htitle").textContent = "First set up"
        }
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
}
var element = document.getElementById("confirmLang");
element.addEventListener("click", clickConfirmLang);