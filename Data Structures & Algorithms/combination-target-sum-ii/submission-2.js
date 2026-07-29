class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort();
        const result = [];
        const currentSet = [];

        const dfs = (i, total) => {
            // Base case
            if (total === target) {
                result.push([...currentSet]);
                return;
            }

            if (i >= candidates.length || total > target) {
                return;
            }

            currentSet.push(candidates[i]);
            dfs(i + 1, total + candidates[i]);

            currentSet.pop();
            while(i < candidates.length && candidates[i] === candidates[i + 1]) {
                i++;
            }
            dfs(i + 1, total);
        }

        dfs(0, 0);
        return result;
    }
}
