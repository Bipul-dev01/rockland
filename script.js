// const menuBtn = document.querySelector(".menu-btn");
// const navigation = document.querySelector(".navigation");
// const contents = document.querySelectorAll(".content");

// menuBtn.addEventListener("click", ()=>{
//     menuBtn.classList.toggle("active");
//     navigation.classList.toggle("active");

// });


// // JS code for video slider navigation

// const btns = document.querySelectorAll(".nav-btn");
// const sliders = document.querySelectorAll(".video-slide");

// var slidernav = function(manual){

//     btns.forEach((btn)=>{
//         btn.classList.remove("active");
//     })

//     sliders.forEach((slide)=>{
//         slide.classList.remove("active");
//     })
//     contents.forEach((content)=>{
//         content.classList.remove("active");
//     })

//     btns[manual].classList.add("active");
//     sliders[manual].classList.add("active");
//     contents[manual].classList.add("active");
// }

// btns.forEach((btn, i)=>{
//     btn.addEventListener("click",() =>{
//         slidernav(i);
//     })
// });



// Toggle menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// Video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const sliders = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

let currentSlide = 0;
const totalSlides = sliders.length;

const slidernav = (manual) => {
    btns.forEach((btn) => btn.classList.remove("active"));
    sliders.forEach((slide) => slide.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    btns[manual].classList.add("active");
    sliders[manual].classList.add("active");
    contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        currentSlide = i;
        slidernav(i);
    });
});

const autoSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    slidernav(currentSlide);
    setTimeout(autoSlide, 5000);
};

setTimeout(autoSlide, 5000);



