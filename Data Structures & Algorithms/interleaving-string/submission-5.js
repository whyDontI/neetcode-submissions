class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const memo = Array(s1.length + 1).fill(null).map(() => Array(s2.length + 1).fill(null));

        const helper = (i, j) => {
            const k = i + j;
            if (k === s3.length) {
                return i === s1.length && j === s2.length;
            }

            if (memo[i][j] !== null) return memo[i][j];

            if (s1[i] === s2[j] && s1[i] === s3[k] && s2[j] === s3[k]) {
                memo[i][j] = helper(i + 1, j) || helper(i, j + 1);
                return memo[i][j];
            }

            if (s1[i] === s3[k]) {
                memo[i][j] = helper(i + 1, j)
                return memo[i][j];
            }

            if (s2[j] === s3[k]) {
                memo[i][j] = helper(i, j + 1);
                return memo[i][j];
            }

            memo[i][j] = false;
            return false;
        }

        return helper(0, 0);
    }
}
