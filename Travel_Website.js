let Bars = document.querySelector("#Bars");
let Menu = document.querySelector("#Menu");

Bars.addEventListener("click", function () {
    this.classList.toggle("fa-xmark");
    Menu.classList.toggle("navigation")
})