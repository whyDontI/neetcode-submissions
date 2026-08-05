class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {

        const paddedNums = [1, ...nums, 1];
        const n = paddedNums.length;
        const memo = Array(n).fill().map(() => Array(n).fill(null));
        
        // Think about which balloon we can burst last

        // Left and right will always point to out of bound balloons
        const helper = (left, right) => {
            if (left + 1 >= right) return 0;
            if (memo[left][right] !== null) return memo[left][right]; 
            // Loop through all the available balloons and try calling helper on them
            // return the Max value
            let max = 0;
            for (let i = left + 1; i < right; i++) {
                const coins = paddedNums[left] * paddedNums[i] * paddedNums[right];
                const totalCoins = helper(left, i) + coins + helper(i, right);
                max = Math.max(max, totalCoins);
            }
            memo[left][right] = max;
            return max;
        }

        return helper(0, n-1);
    }
}
