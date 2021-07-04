const decrementBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  '#counter button[data-action="increment"]'
);
const value = document.querySelector('#value');

let counterValue = 0;

function decrement() {
  value.textContent = counterValue -= 1;
}

function increment() {
  value.textContent = counterValue += 1;
}

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);
