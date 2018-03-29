var feedbackBtn = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-feedback");
var closeBtn = document.querySelector(".modal-close");
var login = document.querySelector("#feedback-form-name");
var email = document.querySelector("#feedback-form-email");
var question = document.querySelector("#feedback-form-question");
var form = popup.querySelector("form");
var bg = document.querySelector(".bg-black");
var message = document.querySelector(".message");

feedbackBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  bg.classList.add("bg-show");
  login.focus();
});

closeBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  closePopup();
});

bg.addEventListener("click", function(evt) {
  closePopup();
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !question.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    if (!login.value) {
      message.innerHTML = "Напишите как вас зовут!";
    } else if (!email.value) {
      message.innerHTML = "Напишите свой email!";
    } else if (!question.value) {
      message.innerHTML = "Задайте вопрос!";
    }
  } else {
    return true;
  } 
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      closePopup();
    }
  }
});

function closePopup() {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  bg.classList.remove("bg-show");
  message.innerHTML = "";
}