class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const memo = Array(text1.length).fill(null).map(() => Array(text2.length).fill(-1));
        const helper = (n, m) => {
            if (n < 0 || m < 0) {
                return 0;
            }

            if (memo[n][m] !== -1) return memo[n][m];

            if (text1[n] === text2[m]) {
                const result = 1 + helper(n - 1, m - 1);
                memo[n][m] = result;
            } else {
                const result = Math.max(
                    helper(n, m - 1),
                    helper(n - 1, m)
                )
                memo[n][m] = result;
            }

            return memo[n][m];
        }

        console.log(memo);
        return helper(text1.length - 1, text2.length - 1);
    }
}
