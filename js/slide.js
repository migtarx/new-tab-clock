const exMsg = ["Buenos dias", "Egun on", "Good Morning"]
const setUpMsg = ["Seleccione su fuente preferida", "Aukeratu letra-tipo hobetsia", "Select your prefered font"]

document.getElementById("su-msg").innerHTML = setUpMsg[localStorage.getItem("lang")];
var elems = document.querySelectorAll('h1');
if (elems.length) { 
  for(var i=1; i<elems.length; i++){
    elems[i].innerHTML = exMsg[localStorage.getItem("lang")];;
  }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
