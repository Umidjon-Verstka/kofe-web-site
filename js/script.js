'use strict'
const headerContainer = document.querySelector(".header__container")
const btnOpen = document.querySelector(".header__burger_open")
const btnClose = document.querySelector(".header__burger_close")

btnOpen.addEventListener("click", ()=>{
    headerContainer.classList.toggle("active");
})
btnClose.addEventListener("click", ()=>{
    headerContainer.classList.toggle("active");
})