const cache = [0, 1];

function fib(n: number): number {
  if (n === 0 || n === 1) return cache[n];

  return cache[n] || (cache[n] = fib(n - 1) + fib(n - 2));
};