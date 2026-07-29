class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort();
        const result = [];
        const currSet = [];

        const dfs = (i, total) => {
            if (total === target) {
                result.push([...currSet.sort()]);
                return;
            }

            if (i >= candidates.length || total > target) {
                return;
            }

            currSet.push(candidates[i]);
            dfs(i + 1, total + candidates[i]);

            currSet.pop()
            while(i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
                i++;
            }
            dfs(i + 1, total);
        }

        dfs(0, 0);
        return result;
    }
}
