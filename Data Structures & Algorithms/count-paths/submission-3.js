class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = Array(m).fill(null).map(() => Array(n).fill(0));

        for (let i = 0; i < m; i++) {
            memo[i][n - 1] = 1;
        }
        for (let j = 0; j < n; j++) {
            memo[m - 1][j] = 1;
        }

        for (let i = m - 2; i >= 0; i--) {
            for (let j = n - 2; j >= 0; j--) {
                memo[i][j] = memo[i + 1][j] + memo[i][j + 1];
            }
        }

        return memo[0][0];
    }
}
