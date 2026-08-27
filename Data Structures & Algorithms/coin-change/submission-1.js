class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = new Map(); // Amount => Answer
        dp.set(0, 0);
        const dfs = (currAmount) => {
            if (currAmount === 0) return 0;
            if (dp.has(currAmount)) return dp.get(currAmount);

            let res = Infinity;
            for (let coin of coins) {
                if (currAmount - coin >= 0) {
                    res = Math.min(res, 1 + dfs(currAmount - coin));
                }
            }

            if (!dp.has(currAmount)) {
                dp.set(currAmount, res);
            }
            return res;
        }

        const minCoins = dfs(amount);
        return minCoins === Infinity ? -1 : minCoins;
    }
}
