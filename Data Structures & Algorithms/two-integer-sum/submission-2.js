class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map(); // Number => Index
        for (let i = 0; i<nums.length; i++) {
            if (map.has(target - nums[i])) {
                return [map.get(target-nums[i]) , i];
            }
            map.set(nums[i], i);
        }
    }
}
