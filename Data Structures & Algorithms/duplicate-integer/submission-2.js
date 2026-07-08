class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set(nums);
        const setLength  = set.size;
        if (setLength !== nums.length) {
            return true
        }
        return false
    }
}
