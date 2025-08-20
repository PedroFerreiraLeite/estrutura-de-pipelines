let count = 0;

function increment() {
  count++;
  return count;
}

function decrement() {
  count--;
  return count;
}

function updateDisplay(value) {
  document.getElementById("value").textContent = value;
}

function handleIncrement() {
  updateDisplay(increment());
}

function handleDecrement() {
  updateDisplay(decrement());
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { increment, decrement };
}

if (typeof window !== "undefined") {
  window.handleIncrement = handleIncrement;
  window.handleDecrement = handleDecrement;
}