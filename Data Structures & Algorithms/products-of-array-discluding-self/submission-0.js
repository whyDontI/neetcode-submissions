class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Take total product without zero
        let totalProduct = nums.reduce((a, c) => a * (c !== 0 ? c : 1), 1);
        let zeroIndexes = new Set();
        nums.forEach((e, i) => {
            if (e == 0) {
                zeroIndexes.add(i);
            }
        })
        console.log("zeroIndexes => ", zeroIndexes.size)
        console.log("Total Product", totalProduct)
        let answer = [];

        for (let i = 0; i<nums.length; i++) {
            if (nums[i] === 0 && zeroIndexes.size === 1) {
                answer.push(totalProduct)
            } else if (nums[i] === 0 && zeroIndexes.size > 1) {
                // Current element zero and other elements are also zero
                answer.push(0);
            } else if (nums[i] !== 0 && zeroIndexes.size > 0) {
                // Current element isn't zero, and other elements are zero
                answer.push(0);
            } else {
                answer.push(totalProduct / nums[i]);
            }
        }

        return answer;
        // Maintain a list of zero indexes
        // on filling the answer array,
        // when the current index, isn't in zero indexes and zero indexes are empty
        // answer.push(product / nums[i])
        // else if (currentIndex is zero and other indexes are empty)
        // answer.push(0)
        // else 
    }
}
