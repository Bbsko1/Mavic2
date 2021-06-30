const navBtn = document.querySelector(".main-nav__button");
const navList = document.querySelector(".main-nav__list");
const menuLinks = document.querySelectorAll('.main-nav__link');

navBtn.addEventListener("click", function (evt) {
    evt.preventDefault()
    navBtn.classList.toggle("main-nav__button--closed");
    navList.classList.toggle("main-nav__list--active")
})

menuLinks.forEach(function (link) {
    link.addEventListener('click', function() {
        navList.classList.remove("main-nav__list--active")
        navBtn.classList.add("main-nav__button--closed");
    })
})



