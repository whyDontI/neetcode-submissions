class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let firstNums = nums.filter((n) => !set.has(n - 1));
        
        console.log(firstNums)
        let maxSeq = 0;
        firstNums.forEach((start) => {
            let currSeq = 1;
            while(set.has(start + 1)) {
                currSeq++;
                start = start + 1;
            }
            maxSeq = Math.max(maxSeq, currSeq);
        })

        return maxSeq;
    }
}
