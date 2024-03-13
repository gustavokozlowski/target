function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
  }
  console.time("Fibonacci");
  console.log(fibonacci(10));
  console.timeEnd("Fibonacci");