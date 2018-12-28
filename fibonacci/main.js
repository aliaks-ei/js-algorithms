/**
 * Create function fibonacci(position) that returns 
 * number on given 'position' from Fibonacci sequence (1, 1, 2, 3, 5, 8, ...).
 */

(function () {
    
    function fibonacci(position) {
        if (position < 3) {
            return 1;
        }

        return fibonacci(position - 1) + fibonacci(position - 2);
    }

    console.log(fibonacci(9)); // 34

})();
