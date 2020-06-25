"use strict";
const buttonMarka = document.querySelector(".button-marka");
const buttonYear = document.querySelector(".button-year");
const buttonModel = document.querySelector(".button-model");
const buttonPrice = document.querySelector(".button-price");
const buttonFilter = document.querySelector(".button-filter");
const selectPrice = document.querySelector(".screen2-select-price");
const selectModel = document.querySelector(".screen2-select-model");
const selectYear = document.querySelector(".screen2-select-year");
const selectMarka = document.querySelector(".screen2-select-marka");
const catalogInner = document.querySelector(".catalog-inner");
const cardFooterMore = document.querySelectorAll(".card-footer__more");
const cardFooterQuestion = document.querySelectorAll(".card-footer__question");
const cards = document.querySelectorAll(".card");
const titleModel = document.querySelectorAll(".title-model");
const titleMarka = document.querySelectorAll(".title-marka");
const descriptionYear = document.querySelectorAll(".description-year");
const price = document.querySelectorAll(".card-body__price");
const arrayPrice = new Object();

function textFilter(currentBtn, currentTitle) {
  const selectOption = currentBtn.querySelectorAll(".screen2-select__option");
  const textBold = currentBtn.querySelectorAll(".option--text-bold");
  const currentText = currentBtn.querySelector(".button-text--bold");

  for (let i = 0; i < selectOption.length; i++) {
    let current = selectOption[i];
    let text = textBold[i].innerText;
    current.addEventListener("click", function (event) {
      event.preventDefault();
      currentText.innerText = text;
      for (let i = 0; i < currentTitle.length; i++) {
        if (current.className.match(".all")) {
          cards[i].style.display = "flex";
        } else if (currentTitle[i].textContent.match(currentText.innerText)) {
          cards[i].style.display = "flex";
        } else {
          cards[i].style.display = "none";
        }
      }
    });
  }
}

function compareDecrease(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  if (a > b) return 1;
  if (a < b) return -1;
}

function compareIncrease(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  if (a < b) return 1;
  if (a > b) return -1;
}

function showFilters() {
  buttonModel.classList.toggle("active-flex");
  buttonMarka.classList.toggle("active-flex");
  buttonYear.classList.toggle("active-flex");
}

function showPrice() {
  selectPrice.classList.toggle("active");
  buttonPrice.classList.toggle("right-angle");

  let buttonPriceWidth = buttonPrice.clientWidth;
  selectPrice.style.width = buttonPriceWidth + "px";

  const selectOption = buttonPrice.querySelectorAll(".screen2-select__option");

  function selectCurrent() {
    if (selectOption) {
      let textBold = buttonPrice.querySelectorAll(".option--text-bold");
      let currentText = buttonPrice.querySelector(".button-text--bold");

      for (let i = 0; i < selectOption.length; i++) {
        let current = selectOption[i];
        let text = textBold[i].innerText;
        current.addEventListener("click", function (event) {
          event.preventDefault();
          currentText.innerText = text;
          // Ищем цену в карточках и помещаем (цену, карточку, индекс) в массив
          cards.forEach(function (item, indx) {
            let currentPrice = Number(
              item
                .querySelector(".card-body__price")
                .textContent.replace(/\D+/g, "")
            );
            arrayPrice[currentPrice] = { element: item, index: indx };
            // преобразовываем объект в массив
            let sortElements = Object.keys(arrayPrice);
            if (current.className.match(".cheapest"))
              sortElements.sort(compareDecrease);
            sortElements.map(function (key, indx) {
              catalogInner.insertAdjacentElement(
                "beforeend",
                arrayPrice[key]["element"]
              );
              arrayPrice[key]["index"] = indx;
            });
            if (current.className.match(".expensive")) {
              sortElements.sort(compareIncrease);
              sortElements.map(function (key, indx) {
                catalogInner.insertAdjacentElement(
                  "beforeend",
                  arrayPrice[key]["element"]
                );
                arrayPrice[key]["index"] = indx;
              });
            }
          });
        });
      }
    }
  }

  selectCurrent();
}
function showModel() {
  selectModel.classList.toggle("active");
  buttonModel.classList.toggle("right-angle");

  let buttonModelWidth = buttonModel.clientWidth;
  selectModel.style.width = buttonModelWidth + "px";

  const selectOption = buttonModel.querySelectorAll(".screen2-select__option");

  function selectCurrent() {
    if (selectOption) {
      textFilter(buttonModel, titleModel);
    }
  }

  selectCurrent();
}
function showMarka() {
  selectMarka.classList.toggle("active");
  buttonMarka.classList.toggle("right-angle");

  let buttonMarkaWidth = buttonMarka.clientWidth;
  selectMarka.style.width = buttonMarkaWidth + "px";

  const selectOption = buttonMarka.querySelectorAll(".screen2-select__option");

  function selectCurrent() {
    if (selectOption) {
      textFilter(buttonMarka, titleMarka);
    }
  }

  selectCurrent();
}

function showYear() {
  selectYear.classList.toggle("active");
  buttonYear.classList.toggle("right-angle");

  let buttonYearWidth = buttonYear.clientWidth;
  selectYear.style.width = buttonYearWidth + "px";

  const selectOption = buttonYear.querySelectorAll(".screen2-select__option");

  function selectCurrent() {
    if (selectOption) {
      let textBold = buttonYear.querySelectorAll(".option--text-bold");
      let currentText = buttonYear.querySelector(".button-text--bold");
      for (let i = 0; i < selectOption.length; i++) {
        let current = selectOption[i];
        let text = textBold[i].textContent;
        current.addEventListener("click", function (event) {
          event.preventDefault();
          currentText.textContent = text;
          let splitText = text.split("-");
          for (let i = 0; i < descriptionYear.length; i++) {
            let currentYear = Number(
              descriptionYear[i].textContent.replace(/\D+/g, "")
            );
            if (current.className.match(".all"))
              cards[i].style.display = "flex";
            else if (currentYear > splitText[0] && currentYear < splitText[1]) {
              cards[i].style.display = "flex";
            } else {
              cards[i].style.display = "none";
            }
          }
        });
      }
    }
  }

  selectCurrent();
}

document.addEventListener("click", function (event) {
  let buttonYearClickInside = buttonYear.contains(event.target);
  let selectYearClickInside = selectYear.contains(event.target);
  let buttonModelClickInside = buttonModel.contains(event.target);
  let selectModelClickInside = selectModel.contains(event.target);
  let buttonMarkaClickInside = buttonMarka.contains(event.target);
  let selectMarkaClickInside = selectMarka.contains(event.target);
  let buttonPriceClickInside = buttonPrice.contains(event.target);
  let selectPriceClickInside = selectPrice.contains(event.target);

  if (!buttonYearClickInside && !selectYearClickInside) {
    selectYear.classList.remove("active");
    buttonYear.classList.remove("right-angle");
  }
  if (!buttonModelClickInside && !selectModelClickInside) {
    selectModel.classList.remove("active");
    buttonModel.classList.remove("right-angle");
  }
  if (!buttonMarkaClickInside && !selectMarkaClickInside) {
    selectMarka.classList.remove("active");
    buttonMarka.classList.remove("right-angle");
  }
  if (!buttonPriceClickInside && !selectPriceClickInside) {
    selectPrice.classList.remove("active");
    buttonPrice.classList.remove("right-angle");
  }
});

if (cardFooterQuestion) {
  let cardModal = document.querySelectorAll(".card-modal");
  let cardModalClose = document.querySelectorAll(".card-modal__close");
  for (let i = 0; i < cardFooterQuestion.length; i++) {
    let currentBtn = cardFooterQuestion[i];
    let currentModal = cardModal[i];
    let currentCloseBtn = cardModalClose[i];
    currentBtn.addEventListener("click", function (event) {
      event.preventDefault();
      currentModal.classList.toggle("active-flex");
    });
    currentCloseBtn.addEventListener("click", function (event) {
      event.preventDefault();
      currentModal.classList.toggle("active-flex");
    });
  }
}

buttonFilter.addEventListener("click", showFilters);
buttonMarka.addEventListener("click", showMarka);
buttonModel.addEventListener("click", showModel);
buttonYear.addEventListener("click", showYear);
buttonPrice.addEventListener("click", showPrice);
