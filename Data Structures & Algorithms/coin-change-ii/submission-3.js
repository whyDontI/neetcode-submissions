class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const memo = Array(coins.length).fill(null).map(() => Array(amount + 1).fill(-1));
        const helper = (i, currAmount) => {
            if (currAmount === 0) return 1;
            if (i >= coins.length || currAmount < 0) return 0;
            if (memo[i][currAmount] !== -1) return memo[i][currAmount];

            // Take current coins infinite times
            let take = helper(i, currAmount - coins[i])
            let skip = helper(i + 1, currAmount);

            memo[i][currAmount] = take + skip;
            return memo[i][currAmount];
        }
        let currAmount = amount;
        return helper(0, currAmount);
    }
}
