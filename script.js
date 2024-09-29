
// $(document).ready(function(){
//     $(window).scroll(function(){
//         // sticky navbar on scroll script
//         if(this.scrollY > 20){
//             $('.header').addClass("sticky");
//         }else{
//             $('.header').removeClass("sticky");
//         }
//          // scroll-up button show/hide script
//          if(this.scrollY>500){
//             $('.scroll-up-btn').addClass("show");
//          }else{
//             $('.scroll-up-btn').removeClass("show");
//          }
//     });
// });

// Toggle menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// Video slider navigation
// const btns = document.querySelectorAll(".nav-btn");
// const sliders = document.querySelectorAll(".video-slide");
// const contents = document.querySelectorAll(".content");

// let currentSlide = 0;
// const totalSlides = sliders.length;

// const slidernav = (manual) => {
//     btns.forEach((btn) => btn.classList.remove("active"));
//     sliders.forEach((slide) => slide.classList.remove("active"));
//     contents.forEach((content) => content.classList.remove("active"));

//     btns[manual].classList.add("active");
//     sliders[manual].classList.add("active");
//     contents[manual].classList.add("active");
// };

// btns.forEach((btn, i) => {
//     btn.addEventListener("click", () => {
//         currentSlide = i;
//         slidernav(i);
//     });
// });

// const autoSlide = () => {
//     currentSlide = (currentSlide + 1) % totalSlides;
//     slidernav(currentSlide);
//     setTimeout(autoSlide, 5000);
// };

// setTimeout(autoSlide, 5000);

// ChatGPT
//**************************************************

// Step 1: Get all the necessary elements
const btns = document.querySelectorAll(".nav-btn"); // navigation buttons
const slides = document.querySelectorAll(".video-slide"); // video slides
const texts = document.querySelectorAll(".content"); // content texts

// Step 2: Set the current slide index to 0 and get total slides
let currentSlide = 0;
const totalSlides = slides.length;

// Step 3: Function to update active slide and content
function showSlide(index) {
    // Remove "active" class from all buttons, slides, and texts
    document.querySelector(".nav-btn.active").classList.remove("active");
    document.querySelector(".video-slide.active").classList.remove("active");
    document.querySelector(".content.active").classList.remove("active");

    // Add "active" class to the current button, slide, and text
    btns[index].classList.add("active");
    slides[index].classList.add("active");
    texts[index].classList.add("active");
}

// Step 4: Set up event listeners for each button (manual slide switch)
btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        currentSlide = index; // Update current slide index
        showSlide(currentSlide); // Call function to show this slide
    });
});

// Step 5: Auto slide function (auto switch every 5 seconds)
// function autoSwitch() {
//     currentSlide = (currentSlide + 1) % totalSlides; // Go to the next slide, loop back at the end
//     showSlide(currentSlide); // Update slide
//     setTimeout(autoSwitch, 5000); // Call again after 5 seconds
// }

//Step 5: use loop (for easy way)


// Step 5: Auto slide function using a loop (auto switch every 5 seconds)
function autoSwitch() {
    for (let i = 0; i < totalSlides; i++) {
        // Increment currentSlide
        currentSlide++;

        // If currentSlide exceeds totalSlides, reset it to 0
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }

        // Show the current slide
        showSlide(currentSlide);

        // Break the loop after updating the slide
        break;
    }

    // Continue auto slide switching every 5 seconds
    setTimeout(autoSwitch, 5000);
}

// Start the automatic slide switch
//autoSwitch();

// Step 6: Start the automatic slide switch
autoSwitch(); // Start automatic slide switching



//3D Image Slider JS code

let prevv = document.querySelector(".prevv");
let nextt = document.querySelector(".nextt");
let boxx = document.querySelector(".box3d");

let degree = 0;

prevv.addEventListener('click', function(){
    degree += 45;
    boxx.style = `transform: perspective(1500px) rotateY(${degree}deg);` ;
});

nextt.addEventListener('click', function(){
    degree -= 45;
    boxx.style = `transform: perspective(1500px) rotateY(${degree}deg);` ;
});

