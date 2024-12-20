import { locations } from "./locationList.js";

//HTML interaction

const spotBtn = document.querySelector(".spot-btn");

const spotTitle = document.querySelector(".spot-title");
const requiresID = document.querySelector(".symbol");
const directionsLink = document.querySelector(".directions-link");

spotBtn.addEventListener("click", function () {
  let r = Math.floor(Math.random() * locations.length);

  spotTitle.textContent = locations[r]["name"];
  requiresID.textContent = locations[r]["id"];
  directionsLink.setAttribute("href", locations[r]["location"]);
});

// Image carousel functionality

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "right" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

//Opening hours modal

const modal = document.querySelector("[data-modal]");
const modalOpenButton = document.querySelector(".hours");
const modalCloseButton = document.querySelector("[data-close-modal]");

modalOpenButton.addEventListener("click", () => {
  modal.showModal();
});

modalCloseButton.addEventListener("click", () => {
  modal.close();
});

//Mobile/portrait layout

var container = document.querySelector(".container");
var containerRight = document.querySelector(".container-right");
var mobileCardDiv = document.querySelector(".mobile-cardDiv");

var width = window.innerWidth;

if (width <= 600) mobileCardDiv.appendChild(containerRight);

window.onresize = function () {
  let width = window.innerWidth;
  console.log(width);
  width <= 600
    ? mobileCardDiv.appendChild(containerRight)
    : container.appendChild(containerRight);
};
