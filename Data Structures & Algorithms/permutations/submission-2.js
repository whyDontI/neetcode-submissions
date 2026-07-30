class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const results = [];
        const currentSet = [];

        // 1 -> 1
        // 2 -> 1 -> 3
        const getPermutations = () => {
            // Base case
            if (currentSet.length === nums.length) {
                results.push([...currentSet]);
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
        return results;
    }
}
