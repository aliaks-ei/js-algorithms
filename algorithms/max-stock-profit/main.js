/**
 * Create function maxStockProfit(array) that takes an array of prices
 * as parameter and returns the max possible profit of the day.
 * 
 * There are some conditions:
 *  - if no profit is possible, return -1.
 *  - a max profit of 0 is treated as any other max profit value.
 */

(function () {
    
    function maxStockProfit(pricesArr) {
        let maxProfit = -1;

        let buyPrice  = 0;
        let sellPrice = 0;

        let changeBuyPrice = true;

        for (let i = 1; i < pricesArr.length; i++) {
            if (changeBuyPrice) {
                buyPrice = pricesArr[i];
            }

            sellPrice = pricesArr[i + 1];

            if (sellPrice < buyPrice) {
                changeBuyPrice = true;
            }
            else {
                let tempProfit = sellPrice - buyPrice;

                if (tempProfit > maxProfit) {
                    maxProfit = tempProfit;
                }

                changeBuyPrice = false;
            }
        }

        return maxProfit;
    }

    console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12])); // 12

})();
