class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = new Map();

        const dfs = (i) => {
            if (memo.has(i)) return memo.get(i);
            if (i >= nums.length) return 0;

            const result = nums[i] + Math.max(dfs(i + 2), dfs(i + 3));
            memo.set(i, result);

            return result;
        }

        return Math.max(dfs(0), dfs(1));
    }
}
