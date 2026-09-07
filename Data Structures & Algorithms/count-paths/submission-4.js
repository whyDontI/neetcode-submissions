class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null));

        const helper = (i, j) => {
            if (i === m - 1 && j === n - 1) {
                memo[i][j] = 1;
            };
            if (i >= m || j >= n) {
                memo[i][j] = 0
            };
            if (memo[i][j] !== null) return memo[i][j];

            memo[i][j] = helper(i+1, j) + helper(i, j+1);
            return memo[i][j];
        }

        return helper(0, 0);
    }
}
