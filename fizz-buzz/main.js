/**
 * fizzBuzz(20) should log in the console all numbers from 1 to 20.
 * Numbers divided by 3 should by replaced on 'Fizz' word.
 * Numbers divided by 5 should by replaced on 'Buzz' word.
 * Numbers divided by 3 and 5 should by replaced on 'FizzBuzz' word.
 */

(function () {
    
    function fizzBuzz(num) {
        for (let i = 1; i <= num; i++) {
            if (i % 15 === 0) {
                console.log('FizzBuzz');
            }
            else if (i % 3 === 0) {
                console.log('Fizz');
            }
            else if (i % 5 === 0) {
                console.log('Buzz');
            }
            else {
                console.log(i);
            }
        }
    }

    fizzBuzz(20);

})();