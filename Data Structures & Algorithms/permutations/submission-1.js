class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const results = [];
        const currentSet = [];

        const getPermutations = () => {
            if (currentSet.length === nums.length) {
                results.push([...currentSet]);
                return;
            }

            for(const n of nums) {
                if (!currentSet.includes(n)) {
                    currentSet.push(n);
                    getPermutations();
                    currentSet.pop();
                }
            }
        }

        getPermutations();
        return results;
    }
}
