
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});


const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});



let elem = document.getElementById("progress");   
let width = 1;
let id = setInterval(frame, 100);
function frame() {
    if (width >= 40) {
        clearInterval(id);
} else {
    width++; 
    elem.style.width = width + '%'; 
}
}




function myFunction() {
  document.getElementById("squareimg").style.transitionProperty = "background-color";
}
function myFunction() {
  document.getElementById("second").style.transitionProperty = "background-color";
}

function myFunction() {
  document.getElementById("individual-section").style.transitionProperty = "background-color";
}





function myFunction() {
  document.getElementById("button-1").style.transitionProperty = "background-color";

}


