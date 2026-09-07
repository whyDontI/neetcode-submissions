class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const memo = new Array(text1.length + 1).fill(null).map(() => new Array(text2.length + 1).fill(null));

        const helper = (i, j) => {      
            if (i >= text1.length || j >= text2.length) memo[i][j] = 0;
            if (memo[i][j] !== null) return memo[i][j];

            const conditions = [];
            if (text1[i] === text2[j]) {
                conditions.push(
                    1 + helper(i + 1, j + 1)
                )
            } else {
                conditions.push(
                    helper(i + 1, j)
                )
                conditions.push(
                    helper(i, j + 1)
                )
            }
            memo[i][j] = Math.max(
                ...conditions
            )

            return memo[i][j];
        }

        return helper(0, 0);
    }
}
