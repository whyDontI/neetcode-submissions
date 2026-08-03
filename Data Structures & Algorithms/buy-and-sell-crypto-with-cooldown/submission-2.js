class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // const memo = Array(prices.length).fill([-1, -1]);
        const memo = Array.from({ length: prices.length }, () => [-1, -1]);
        const helper = (i, bought) => {
            if (i >= prices.length) return 0;
            if (memo[i][bought ? 1 : 0] !== -1) return  memo[i][bought ? 1 : 0];
            let buyProfit = 0;
            let sellProfit = 0;
            // Already bought - try selling
            if (bought) {
                sellProfit = Math.max(
                    prices[i] + helper(i + 2, false), // Sell
                    helper(i + 1, true), // Skip
                )
            }

            // not sold - try buying
            if (!bought) {
                buyProfit = Math.max(
                    helper(i + 1, true) - prices[i], // Buy
                    helper(i + 1, false), // Skip
                )
            }

            const result = Math.max(buyProfit, sellProfit);
            memo[i][bought ? 1 : 0] = result;
            return result;
        }

        return helper(0, false);
    }
}
