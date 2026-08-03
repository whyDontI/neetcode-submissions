class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const memo = Array(prices.length).fill(null).map(() => Array(2).fill(-1));
        const helper = (i, bought) => {
            if (i >= prices.length) return 0;
            const state = bought ? 1 : 0;
            if (memo[i][state] !== -1) return memo[i][state];

            let profit = 0;
            // Already bought - try selling
            if (bought) {
                profit = Math.max(
                    prices[i] + helper(i + 2, false), // Sell at current price
                    helper(i + 1, true) // Don't sell jump only one place
                )
            } else {
                // Sold already or first element - try buying
                profit = Math.max(
                    helper(i + 1, true) - prices[i], // buy
                    helper(i + 1, false) // Skip
                )
            }

            memo[i][state] = profit;
            return profit;
        }

        return helper(0, false);
    }
}
