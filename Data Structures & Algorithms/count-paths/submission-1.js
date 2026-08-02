class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = Array(m).fill(null).map(() => Array(n).fill(null));
        
        const dfs = (i, j) => {
            if (i >= m || j >= n) return 0;
            if (memo[i][j] !== null) return memo[i][j];
            if (i === m - 1) return 1;
            if (j === n - 1) return 1;

            const result = dfs(i + 1, j) + dfs(i, j + 1);
            memo[i][j] = result;
            return result;
        };

        return dfs(0, 0);
    }
}
