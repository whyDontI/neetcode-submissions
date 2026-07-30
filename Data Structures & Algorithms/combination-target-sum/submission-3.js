class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const currentSet = [];

        const getCombinations = (i, total) => {
            // Base case
            if (total === target) {
                result.push([...currentSet]);
                return;
            }

            if (i >= nums.length || total > target) return;

            // Include nums[i]
            currentSet.push(nums[i]);
            getCombinations(i, total + nums[i]);

            // Exclude nums[i]
            currentSet.pop()
            getCombinations(i + 1, total);
        }

        getCombinations(0, 0);
        return result
    }
}
