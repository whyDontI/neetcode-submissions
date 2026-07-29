class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const currSet = [];

        const dfs = (i, currTotal) => {
            // Base case 1
            if (currTotal === target) {
                result.push([...currSet]);
                return;
            }

            // Base case 2
            if (i >= nums.length || currTotal > target) {
                return;
            }

            currSet.push(nums[i]);
            dfs(i, currTotal + nums[i]);

            currSet.pop();
            dfs(i + 1, currTotal);
        }

        dfs(0, 0);
        return result;
    }
}
