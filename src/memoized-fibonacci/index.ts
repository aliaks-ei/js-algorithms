function memoizedFibonacci(index: number, cache: number[]): number {
  if (cache[index]) {
    return cache[index];
  }

  if (index < 3) {
    return 1;
  } else {
    cache[index] =
      memoizedFibonacci(index - 1, cache) + memoizedFibonacci(index - 2, cache);
  }

  return cache[index];
}

export default memoizedFibonacci;
