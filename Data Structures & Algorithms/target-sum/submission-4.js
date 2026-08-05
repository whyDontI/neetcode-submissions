class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const memo = new Map();
        const helper = (i, total) => {
            if (i === nums.length) return total === target ? 1 : 0;

            const key = `${i}_${total}`;
            if (memo.has(key)) return memo.get(key);

            const result = helper(i + 1, total + nums[i])
            + helper(i + 1, total - nums[i]);

            memo.set(key, result);
            return result;
        };

        return helper(0, 0)
    }
}
