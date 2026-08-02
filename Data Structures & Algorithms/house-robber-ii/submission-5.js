class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        const helper = (range) => {
            const memo = new Map();
            const dfs = (i) => {
                if (i >= range.length) return 0;
                if (memo.has(i)) return memo.get(i);

                const result = range[i] + Math.max(dfs(i + 2), dfs(i + 3));
                memo.set(i, result);

                return result;
            }

            return Math.max(dfs(0), dfs(1));
        }

        const range1 = nums.slice(0, nums.length - 1);
        const range2 = nums.slice(1);

        return Math.max(helper(range1), helper(range2));
    }
}
