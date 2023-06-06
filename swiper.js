const container = document.querySelector(".container");
const wrapper = document.querySelector(".brands__box");
const card = document.querySelectorAll(".swiper__slide");
const btnHide = document.querySelector(".brands__btn");
document.addEventListener("DOMContentLoaded", () => {
  const width = document.body.clientWidth;
  if (width <= 320) {
    container.classList.toggle("mySwiper");
    wrapper.classList.toggle("swiper-wrapper");
    //wrapper.classList.toggle("brands__box-hide");
    btnHide.classList.toggle("btn-hide");
    card.forEach((e) => {
      e.classList.toggle("swiper-slide");
    });
  }
  new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
