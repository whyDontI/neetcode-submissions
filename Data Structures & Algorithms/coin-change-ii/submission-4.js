class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const memo = Array(coins.length).fill(null).map(() => Array(amount + 1).fill(null));

        const helper = (i, total) => {
            if (i >= coins.length) return 0;
            if (total === 0) return 1; // @ NOT SURE Visit later
            if (total < 0) return 0;

            if (memo[i][total] !== null) return memo[i][total];

            memo[i][total] = helper(i, total - coins[i]) + helper(i + 1, total)
            return memo[i][total];
        };

        let total = amount;
        return helper(0, total);
    }
}
