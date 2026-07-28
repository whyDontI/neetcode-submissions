class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = []
        this.getSubSets(nums, result);
        return result;
    }

    getSubSets(nums, result) {
        if (nums.length <= 0) return [];
        if (nums.length === 1) {
            result.push([])
            result.push([nums[0]])
            return result;
        }

        const currNum = nums.shift();
        const newResult = this.getSubSets(nums, result);

        newResult.map((r) => {
            newResult.push([...r, currNum]);
        })

        return newResult;
    }
}
