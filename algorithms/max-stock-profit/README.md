# Maximum stock profit

## Description

You will be given a list of stock prices for a given day and your goal is to return the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on. For example if the input is: [45, 24, 35, 31, 40, 38, 11] then the maximum profit is 16 because if you bought the stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit that could be made.

There are some confitions:
>   - if no profit could have been made, return -1.
>   - a maximum profit of 0 is treated as any other maximum profit value.
>   - you can only sell a stock after you have bought it.

## Implementation

**_maxStockProfit(prices)_** should return the maximum possible profit depending on _prices_ values.

For example:

```
maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]) // 12
```
