class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const currentSet = [];

        // Don't pass index - because past elements can be added in the set as well
        const getPermutations = () => {
            // Base case
            if (currentSet.length === nums.length) {
                result.push([...currentSet]);
                return;
            }

            for (const n of nums) {
                if (!currentSet.includes(n)) {
                    currentSet.push(n);
                    getPermutations();
                    currentSet.pop();
                }
            }
        }

        getPermutations();

        return result;
    }
}
