class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const memo = new Map();
        const helper = (i, currSum) => {
            if (currSum === target && i >= nums.length) return 1;
            if (i >= nums.length) return 0;

            let key = `${i}_${currSum}`;
            if (memo.has(key)) return memo.get(key);

            const result = helper(i + 1, currSum + nums[i]) +
                        helper(i + 1, currSum - nums[i]);

            memo.set(key, result);
            return result;
        }

        return helper(0, 0);
    }
}
