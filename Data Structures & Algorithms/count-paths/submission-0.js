class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let memo = Array(m).fill(null).map(() => Array(n).fill(0));
        for (let i = 0; i < m; i++) {
            memo[i][n - 1] = 1;
        }
        for (let i = 0; i < n; i++) {
            memo[m - 1][i] = 1;
        }



        for (let i = m - 2; i >= 0; i--) {
            for (let j = n - 2; j >= 0; j--) {
                console.log(i, j, memo[i + 1][j], memo[i][j + 1]);
                memo[i][j] = memo[i + 1][j] + memo[i][j + 1];
            }
        }
 
        return memo[0][0];
    }
}

// [
//     [ 0, 0, 0, 0, 0, 1 ],
//     [ 0, 0, 0, 0, 0, 1 ],
//     [ 1, 1, 1, 1, 1, 1 ]
// ]
