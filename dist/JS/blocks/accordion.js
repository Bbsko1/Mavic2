var accr = document.querySelectorAll(".questions__accordion");

var i;

for (i = 0; i < accr.length; i++) {
  accr[i].addEventListener("click", function() {
    this.classList.toggle("questions__accordion--active");
    var text = this.nextElementSibling;
    if (this.classList.contains("questions__accordion--active")) {
        text.classList.remove('questions__text--closed')
    } else {
        text.classList.add('questions__text--closed')
    }
  });
}


/* const accordion = document.querySelectorAll(".questions__accordion");
const text = document.querySelectorAll(".questions__text");

accordion.forEach(function (btn, i) {
    btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        btn.classList.toggle('questions__accordion--active');
        if (btn.classList.contains('questions__accordion--active')) {
            text[i].classList.remove('visually-hidden')
            console.log('true')
        } else {
            text[i].classList.add('visually-hidden')
        }
    })
}) */