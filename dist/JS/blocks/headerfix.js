const header = document.querySelector(".main-header");

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "40px";
  } else if (prevScrollpos < currentScrollPos && !(navList.classList.contains("main-nav__list--active"))) {
    header.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


/* const header = document.querySelector(".main-header");



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.classList.add("main-header--fixed")
  } else if (prevScrollpos < currentScrollPos && !(navList.classList.contains("main-nav__list--active"))) {
    header.classList.remove("main-header--fixed")
  }
  prevScrollpos = currentScrollPos;
}; */