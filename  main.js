/*Show and hide */
const toggleBtn = document.querySelector(".brands__show");
const divList = document.querySelector(".brands__box");

toggleBtn.addEventListener("click", (e) => {
  if (e.target.innerHTML === "Скрыть") {
    e.target.innerHTML = "Показать все";
  } else {
    e.target.innerHTML = "Скрыть";
  }
  toggleBtn.classList.toggle("btn-rotate");
  divList.classList.toggle("brands__box-hide");
});
