class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const result = [];
        const currentSet = [];

        const getSubsets = (i) => {
            if (i === nums.length) {
                result.push([...currentSet]);
                return;
            }

            currentSet.push(nums[i]); // Include
            getSubsets(i + 1);

            // Handle duplicates
            while(i < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            currentSet.pop();
            getSubsets(i + 1);
        }

        getSubsets(0)
        return result;
    }
}
