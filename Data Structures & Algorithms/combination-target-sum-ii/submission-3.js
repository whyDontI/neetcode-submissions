class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let nums = candidates;
        nums.sort((a, b) => a - b);
        const result = [];
        const currentSet = [];

        const getCombination = (i, total) => {
            // Base case
            if (total === target) {
                result.push([...currentSet]);
                return;
            }

            if (i >= nums.length || total > target) return;

            currentSet.push(nums[i]);
            getCombination(i + 1, total + nums[i]);

            // Handle duplicates - skip till next non duplicate element
            while(i < nums.length && nums[i] === nums[i + 1]) { i++ }

            currentSet.pop();
            getCombination(i + 1, total);
        }

        getCombination(0, 0);
        return result;
    }
}
