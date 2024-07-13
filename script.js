const incrementBtn = document.getElementById("up");
const decreaseBtn = document.getElementById("down");
const resBtn = document.getElementById("restart");
const counterElement = document.getElementById("counter-value");

let count = 0;
counterElement.textContent = count;

function updateCount() {
  counterElement.textContent = count;
}

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCount();
});

incrementBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

resBtn.addEventListener("click", () => {
  count = 0;
  updateCount();
});
