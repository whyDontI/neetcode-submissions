class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = []; // Fill when the base case has met
        const currentSet = [];

        const dfs = (i, total) => {
            // Base case 1
            if (total === target) {
                result.push([...currentSet]);
                return;
            }

            // Base case 2
            if (i >= nums.length || total > target) {
                return;
            }

            currentSet.push(nums[i]);
            dfs(i, total + nums[i]);

            currentSet.pop();
            dfs(i + 1, total);
        }

        dfs(0, 0)
        return result;
    }
}
