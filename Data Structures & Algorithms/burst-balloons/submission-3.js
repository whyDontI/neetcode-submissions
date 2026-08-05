class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        const paddedNums = [1, ...nums, 1];
        const n = paddedNums.length;

        const memo = Array(n).fill(null).map(() => Array(n).fill(null));

        const helper = (left, right) => {
            if (left + 1 >= right) {
                return 0;
            }

            if (memo[left][right] !== null) return memo[left][right];
            
            let maxCoins = 0;
            // Loop through every valid element and find the max coins
            for (let i = left + 1; i < right; i++) {
                const currentCoins = paddedNums[left] * paddedNums[i] * paddedNums[right];
                const totalCoins = helper(left, i) + currentCoins + helper(i, right);
                maxCoins = Math.max(
                    maxCoins,
                    totalCoins,
                )
            }
            
            memo[left][right] = maxCoins;
            return maxCoins;
        };

        return helper(0, n-1);
    }
}

