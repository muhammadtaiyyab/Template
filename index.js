// const slides = document.querySelectorAll('.slider img');
// const prevBtn = document.querySelector('#prev');
// const nextBtn = document.querySelector('#next');
// let index = 0;

// function prevSlide() {
//   slides[index].classList.remove('active');
//   index = (index - 1 + slides.length) % slides.length;
//   slides[index].classList.add('active');
// }

// function nextSlide() {
//   slides[index].classList.remove('active');
//   index = (index + 1) % slides.length;
//   slides[index].classList.add('active');
// }

// prevBtn.addEventListener('click', prevSlide);
// nextBtn.addEventListener('click', nextSlide);

// // Auto play the slider
// setInterval(nextSlide, 5000);

// const slides = document.querySelectorAll('#banner .slider img');
// const dots = document.querySelectorAll('#banner .slide-indicators span');
// const prevButton = document.querySelector('#banner .slider-prev');
// const nextButton = document.querySelector('#banner .slider-next');
// let currentIndex = 0;

// function showSlide(index) {
//   // Remove active class from all slides and dots
//   slides.forEach(slide => slide.classList.remove('active'));
//   dots.forEach(dot => dot.classList.remove('active'));

//   // Set the current slide and dot to active
//   slides[index].classList.add('active');
//   dots[index].classList.add('active');

//   // Update currentIndex
//   currentIndex = index;
// }

// function nextSlide() {
//   if (currentIndex === slides.length - 1) {
//     // If last slide, go to first slide
//     showSlide(0);
//   } else {
//     // Otherwise, go to next slide
//     showSlide(currentIndex + 1);
//   }
// }

// function prevSlide() {
//   if (currentIndex === 0) {
//     // If first slide, go to last slide
//     showSlide(slides.length - 1);
//   } else {
//     // Otherwise, go to previous slide
//     showSlide(currentIndex - 1);
//   }
// }

// // Set up click events for previous and next buttons
// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);

// // Set up click events for slide dots
// dots.forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     showSlide(index);
//   });
// });

// // Show the first slide and dot as active
// showSlide(0);

// const slides = document.querySelectorAll('#banner .slider img');
// const dots = document.querySelectorAll('#banner .slide-indicators span');
// const prevButton = document.querySelector('#banner #prev');
// const nextButton = document.querySelector('#banner #next');
// let currentIndex = 0;
// const slidesLength = slides.length;
// const dotsLength = dots.length;

// function showSlide(index) {
//   // Remove active class from all slides and dots
//   slides.forEach(slide => slide.classList.remove('active'));
//   dots.forEach(dot => dot.classList.remove('active'));

//   // Set the current slide and dot to active
//   slides[index].classList.add('active');
//   dots[index].classList.add('active');

//   // Update currentIndex
//   currentIndex = index;
// }

// function nextSlide() {
//   if (currentIndex === slidesLength - 1) {
//     // If last slide, go to first slide
//     showSlide(0);
//   } else {
//     // Otherwise, go to next slide
//     showSlide(currentIndex + 1);
//   }
// }

// function prevSlide() {
//   if (currentIndex === 0) {
//     // If first slide, go to last slide
//     showSlide(slidesLength - 1);
//   } else {
//     // Otherwise, go to previous slide
//     showSlide(currentIndex - 1);
//   }
// }

// // Set up click events for previous and next buttons
// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);

// // Set up click events for slide dots
// dots.forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     showSlide(index);
//   });
// });

// // Show the first slide and dot as active
// showSlide(0);

const slides = document.querySelectorAll('#banner .slider img');
const dots = document.querySelectorAll('#banner .slide-indicators span');
const prevButton = document.querySelector('#banner #prev');
const nextButton = document.querySelector('#banner #next');
let currentIndex = 0;
const slidesLength = slides.length;
const dotsLength = dots.length;

function showSlide(index) {
  // Remove active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Set the current slide and dot to active
  slides[index].classList.add('active');
  dots[index].classList.add('active');

  // Update currentIndex
  currentIndex = index;
}

function nextSlide() {
  if (currentIndex === slidesLength - 1) {
    // If last slide, go to first slide
    showSlide(0);
  } else {
    // Otherwise, go to next slide
    showSlide(currentIndex + 1);
  }
}

function prevSlide() {
  if (currentIndex === 0) {
    // If first slide, go to last slide
    showSlide(slidesLength - 1);
  } else {
    // Otherwise, go to previous slide
    showSlide(currentIndex - 1);
  }
}

// Set up click events for previous and next buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Set up click events for slide dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Show the first slide and dot as active
showSlide(0);

// Set up interval to automatically move to next slide every 5 seconds (5000 milliseconds)
setInterval(() => {
  nextSlide();
}, 5000);