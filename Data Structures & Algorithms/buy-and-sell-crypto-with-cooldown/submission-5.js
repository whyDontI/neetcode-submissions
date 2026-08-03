class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const memo = Array(prices.length).fill(null).map(() => [-1, -1]);    

        const helper = (i, bought) => {
            // Base case
            if (i >= prices.length) return 0;

            const state = bought ? 1 : 0;
            
            if (memo[i][state] !== -1) return memo[i][state];

            let result = 0;

            // Bought already - try selling
            if (bought) {
                result = Math.max(
                    prices[i] + helper(i + 2, false),
                    helper(i + 1, true) // Skip this element
                );
            } else {
                // Sold before - try buying
                result = Math.max(
                    helper(i + 1, true) - prices[i],
                    helper(i + 1, false) // Skip this element
                );
            }

            memo[i][state] = result;

            return memo[i][state];
        }

        return helper(0, false);
    }
}
