/* eslint-disable linebreak-style */
// function fib(n) {
//   // fib(5) = fib(4) + fib(3) -> fib(n) = fib(n-1) + fib(n-2)
//   if (n === 0) {
//     return 0;
//   }

//   if (n === 1) {
//     return 1;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// fib(5);

const sum = (n) => {
  if (n === 0) return 0;

  const total = sum(n - 1) + n;

  return total;
};

console.log(sum(3));
