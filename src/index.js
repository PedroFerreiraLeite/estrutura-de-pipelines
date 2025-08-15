let count = 0;

function increment() {
  count++;
  return count;
}

function decrement() {
  count--;
  return count;
}

module.exports = { increment, decrement };
