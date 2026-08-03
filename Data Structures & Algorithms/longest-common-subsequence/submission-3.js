class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const memo = Array(text1.length).fill(null).map(() => Array(text2.length).fill(-1));
        const helper = (i, j) => {
            if (i >= text1.length) return 0;
            if (j >= text2.length) return 0;
            if (memo[i][j] !== -1) return memo[i][j];

            let result = 0;
            if (text1[i] === text2[j]) {
                memo[i][j] = 1 + helper(i + 1, j + 1);
                return memo[i][j];
            }

            memo[i][j] = Math.max(
                helper(i, j + 1),
                helper(i + 1, j)
            )
            return memo[i][j];
        };

        return helper(0, 0);
    }
}
