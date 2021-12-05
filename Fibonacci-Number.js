function fibonacci(position) {
  if (position < 2) return position;
  return fibonacci(position - 1) + fibonacci(position - 2);
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
