// Лічильник

const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const span = document.querySelector("#value");

const counter = {
  value: 0,

  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

incrBtn.addEventListener("click", function () {
  counter.increment();
  span.textContent = counter.value;
});


decrBtn.addEventListener("click", function () {
  counter.decrement();
  span.textContent = counter.value;
});