const fib = (number) => {
  let fibo = [1, 1];
  for (let i = 2; i < number; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }
  return fibo[number - 1];
};

console.log(fib(50))