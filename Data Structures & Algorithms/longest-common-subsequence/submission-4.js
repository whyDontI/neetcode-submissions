class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const memo = Array(text1.length).fill(null).map(() => Array(text2.length).fill(null));

        const helper = (i, j) => {
            if (i >= text1.length || j>= text2.length) return 0;

            if (memo[i][j] !== null) return memo[i][j];
            
            const match = text1[i] === text2[j];
            
            if (match) {
                memo[i][j] = 1 + helper(i + 1, j + 1)
            } else {
                memo[i][j] = Math.max(
                    helper(i + 1, j), 
                    helper(i, j + 1)
                );
            }

            return memo[i][j];
        }

        return helper(0, 0);
    }
}
