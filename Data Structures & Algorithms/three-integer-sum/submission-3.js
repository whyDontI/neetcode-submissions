class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let answers = [];
        nums.sort((a, b) => a - b);
        console.log(nums)
        for(let i = 0; i < nums.length; i++) {
            // skip duplicates
            while (i > 0 && nums[i - 1] === nums[i]) {i++}

            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                let sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    answers.push([nums[i], nums[j], nums[k]])
                    while(j < k && nums[j] === nums[j + 1]) {j++}
                    while(j < k && nums[k] === nums[k - 1]) {k--}
                    j++;
                    k--;
                } else if (sum < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }

        return answers;
    }
}
