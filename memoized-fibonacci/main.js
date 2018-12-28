/**
 * Create function fibMemo(index, cache) that returns 
 * number on given 'index' from Fibonacci sequence (1, 1, 2, 3, 5, 8, ...).
 * Parameters:
 *  - index: index of number in Fibonacci sequence
 *  - cache: an array used as memory
 */

(function () {
    
    function fibMemo(index, cache = []) {
        if (cache[index]) {
            return cache[index];
        }
        
        if (index < 3) {
            return 1;
        }
        else {
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
        }

        return cache[index];
    }

    console.log(fibMemo(10)); // 55

})();
