# Maximum stock profit

## Description

You will be given a list of stock prices for a given day and your goal is to return the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on.   
  
For example if the input is **_[45, 24, 35, 31, 40, 38, 11]_** then the maximum profit is **16** because if you bought the stock at _$24_ and sold it at _$40_, a profit of _$16_ was made and this is the largest profit that could be made.

## Implementation

**_maxStockProfit(prices)_** should return the maximum possible profit depending on _prices_ values.

There are some conditions:
>   - if no profit could have been made, return _-1_.
>   - a maximum profit of _0_ is treated as any other maximum profit value.
>   - you can only sell a stock after you have bought it.

For example:

```
maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]) // 12
```
