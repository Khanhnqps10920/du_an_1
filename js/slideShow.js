"use strict"

let slideIndex = 0;


const dots = document.querySelectorAll('.dot');


const slides = document.querySelectorAll('.slideShow__item');

const showSlides = () => {
  let index;


  for (index = 0; index < dots.length; index++) {
    dots[index].className = dots[index].className.replace(" active", "");
  }

  for (index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
    dots[index].className = dots[index].className.replace(" active", "");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 8000);

}

showSlides();