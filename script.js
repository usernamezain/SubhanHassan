let shower = document.querySelector(".image-shower");
let closes = document.querySelector(".cancel");
let imageShown = document.querySelector(".image-show");

let projects = document.querySelectorAll(".project");

function openimage(srcurl) {
  shower.style.transform = "scale(1)";
  shower.style.opacity = 1;
  setTimeout(() => {
    imageShown.src = srcurl;
  }, 400);
}
closes.addEventListener("click", (e) => {
  shower.style.transform = "scale(0)";
  shower.style.opacity = 0;

  imageShown.src = "";
});

// Select the form and its input fields
const form = document.querySelector("form");
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const phoneInput = form.querySelector('input[name="phone"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Add a submit event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the values from the input fields
  const name = encodeURIComponent(nameInput.value.trim());
  const email = encodeURIComponent(emailInput.value.trim());
  const phone = encodeURIComponent(phoneInput.value.trim());
  const message = encodeURIComponent(messageInput.value.trim());

  // Construct the mailto link
  const mailtoLink = `mailto:design.graphoria@gmail.com?subject=Contact Form Submission&body=Username: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

  // Open the mailto link
  window.location.href = mailtoLink;

  // Optionally clear the form fields
  form.reset();
});

// contact page

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
