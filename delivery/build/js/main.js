const cartButton = document.querySelector("#cart-button");
const authButton = document.querySelector("#button-auth");
const modalCart = document.querySelector(".modal-cart");
const modalAuth = document.querySelector(".modal-auth");
const close = document.querySelector(".close");
const closeAuth = document.querySelector(".close-auth");
const logInInput = document.querySelector("#login");
const logInPassword = document.querySelector("#password");
const userName = document.querySelector(".user-name");
const logInForm = document.querySelector("#logInForm");
const buttonOut = document.querySelector(".button-out");

let login = localStorage.getItem("user");
let password = localStorage.getItem("password");

function toggleModal() {
  modalCart.classList.toggle("is-open");
}

function toggleModalAuth() {
  modalAuth.classList.toggle("is-open");
}

function Authorize() {
  function logOut() {
    login = null;
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    authButton.style.display = "";
    userName.style.display = "";
    buttonOut.style.display = "";
    cartButton.style.display = "";
    buttonOut.removeEventListener("click", logOut);
    checkAuth();
  }

  userName.textContent = login;

  authButton.style.display = "none";
  userName.style.display = "inline";
  buttonOut.style.display = "block";
  cartButton.style.display = "block";
  cartButton.addEventListener("click", toggleModal);
  buttonOut.addEventListener("click", logOut);
}

function notAuthorize() {
  function logIn(event) {
    event.preventDefault();

    if (logInInput.value.trim()) {
      login = logInInput.value;
      password = logInPassword.value;
      localStorage.setItem("user", login);
      localStorage.setItem("password", password);
      authButton.removeEventListener("click", toggleModalAuth);
      closeAuth.removeEventListener("click", toggleModalAuth);
      logInForm.removeEventListener("submit", logIn);
      logInForm.reset();
      toggleModalAuth();
      checkAuth();
    }
  }
  authButton.addEventListener("click", toggleModalAuth);
  closeAuth.addEventListener("click", toggleModalAuth);
  logInForm.addEventListener("submit", logIn);
}

function checkAuth() {
  if (login) {
    Authorize();
  } else {
    notAuthorize();
  }
}

checkAuth();

close.addEventListener("click", toggleModal);

var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
