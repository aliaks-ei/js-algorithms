function sieveOfEratosthenes(num: number): number[] {
  const primes: boolean[] = [];
  const result: number[] = [];

  for (let i = 0; i <= num; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; j * i <= num; j++) {
      primes[j * i] = false;
    }
  }

  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
}

export default sieveOfEratosthenes;
