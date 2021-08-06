function sieveOfEratosthenes(num) {
  const primes = [];
  const result = [];

  for (let i = 0; i <= num; i ++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; j * i <= num; j++) {
      primes[j * i] = false;
    }
  }

  const primesLength = primes.length;

  for (let i = 0; i < primesLength; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
}

module.exports = sieveOfEratosthenes;
