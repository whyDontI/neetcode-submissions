class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const memo = Array(s.length).fill(null).map(() => Array(t.length).fill(null));

        const helper = (i, j) => {
            if (j >= t.length) return 1;
            if (i >= s.length) return 0;

            if (memo[i][j] !== null) return memo[i][j];

            memo[i][j] = helper(i + 1, j); // Skip
            if (s[i] === t[j]) {
                memo[i][j] += helper(i + 1, j + 1);
            }

            return memo[i][j];
        }

        return helper(0, 0);
    }
}
