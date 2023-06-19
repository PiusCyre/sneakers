"use strict";

const heroImage = document.querySelector(".hero-image");
const images = document.querySelectorAll(".flex-images");
// modals etc
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const pics = document.querySelectorAll(".pic");
const modalHeroImage = document.querySelector("#modal-image");
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
//main flex images
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    heroImage.src = image.src;
  });
});

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

heroImage.addEventListener("click", openModal);

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

//for modal images
pics.forEach(function (pic) {
  pic.addEventListener("click", (e) => {
    modalHeroImage.src = pic.src;
  });
});

// one hundred eaters, i cant fit them in one SUV!
const imgs = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];
// just wanted to destructure the array
const [uno, dos, tres, quinto] = imgs;
//now let us cook
// for the previous and next button, but ill have to comment them out
let currentImageIndex = 0;
function updateImage() {
  pics.src = imgs[currentImageIndex].src;
}

const prevImage = () => {
  updateImage();
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = imgs.length - 1;
  }
};
const nextImage = () => {
  updateImage();
  currentImageIndex++;
  if (currentImageIndex >= imgs.length) {
    currentImageIndex = 0;
  }
};
//event listeners now
prevArrow.addEventListener("click", prevImage);
nextArrow.addEventListener("click", nextImage);
updateImage();

// cart shit
const numberElement = document.querySelector(".number");
const minusIcon = document.querySelector(".minus-icon");
const plusIcon = document.querySelector(".plus-icon");
const cartBtn = document.querySelector(".button");

let numeroPrimero = 0;
const counterStuff = () => {
  numberElement.textContent = numeroPrimero;
  if (numeroPrimero <= 0) {
    numeroPrimero = 0;
  }
};

minusIcon.addEventListener("click", function () {
  numeroPrimero--;
  counterStuff();
});

plusIcon.addEventListener("click", function () {
  numeroPrimero++;
  counterStuff();
});

function addToCart() {
  //   if (numeroPrimero == 0) return;
  const adding = confirm("Do you wish to add these to cart?");
  if (adding) {
    alert(`Succeffully added ${numeroPrimero} item(s) to cart👏`);
  }
}
cartBtn.addEventListener("click", () => {
  counterStuff();
  addToCart();
});

// hamburger and mobile menu
const menuBtn = document.querySelector("#icon-menu");
const exitBtn = document.querySelector("#icon-close");
const mobileNavUl = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", function (event) {
  mobileNavUl.classList.remove("nav-ul");
});

exitBtn.addEventListener("click", function (event) {
  mobileNavUl.classList.add("nav-ul");
});
