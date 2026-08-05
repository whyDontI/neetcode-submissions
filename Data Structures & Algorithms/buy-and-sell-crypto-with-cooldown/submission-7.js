class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const memo = Array(prices.length + 1).fill(null).map(() => Array(2).fill(null));

        const helper = (i, bought) => {
            if (i >= prices.length) return 0;
            const state = bought ? 1 : 0;
            if (memo[i][state] !== null) return memo[i][state];

            memo[i][state] = 0;
            // 2 Choices
            // Sell - if already bought
            if (bought) { // Already bought - we try selling
                memo[i][state] = Math.max(
                    prices[i] + helper(i + 2, false), // Sell
                    helper(i + 1, true) // Skip
                )
            } else {
                // Buy -> substract current price from profit
                memo[i][state] = Math.max(
                    helper(i + 1, true) - prices[i], // buy
                    helper(i + 1, false)
                )
            }

            return memo[i][state];
        };

        return Math.max(helper(0, false), helper(1, false));
    }
}
