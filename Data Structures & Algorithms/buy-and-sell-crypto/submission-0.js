class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = -Infinity;
        let profit = [];
        for (let i = prices.length - 1; i >= 0; i--) {
            if (prices[i] > max) {
                max = prices[i];
            }
            profit[i] = max - prices[i];
        }

        console.log(profit)
        return Math.max(...profit);
    }
}
