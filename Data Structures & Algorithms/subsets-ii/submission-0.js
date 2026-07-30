class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const results = [];
        const currentSet = [];

        const getSubsets = (i) => {
            // Base case
            if (i === nums.length) {
                results.push([...currentSet]);
                return;
            }

            currentSet.push(nums[i]);
            getSubsets(i + 1);
            currentSet.pop();
            while(i < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            getSubsets(i + 1);
        }

        getSubsets(0);
        return results;        
    }
}
