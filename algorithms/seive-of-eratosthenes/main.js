/**
 * Create function sieveOfEratosthenes(num) that 
 * returns all prime numbers up to 'num' in an array
 */

(function () {
    
    function sieveOfEratosthenes(num) {
        let primes = [];
        let result = [];

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

        for (let i = 0; i < primes.length; i++) {
            if (primes[i]) {
                result.push(i);
            }
        }

        return result;
    }

    console.log(sieveOfEratosthenes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]

})();
