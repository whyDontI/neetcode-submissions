class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) return false;
        const memo = Array(s1.length + 1).fill(null)
        .map(() => Array(s2.length + 1).fill(null)
        .map(() => Array(s3.length + 1).fill(null)));

        const helper = (i, j, k) => {
            if (k === s3.length) {
                return i === s1.length && j === s2.length;
            }

            if (memo[i][j][k] !== null) return memo[i][j][k];

            if (i < s1.length && s1[i] === s3[k]) {
                memo[i][j][k] = helper(i + 1, j, k + 1)
                if (memo[i][j][k]) return true;
            }

            if (j < s2.length && s2[j] === s3[k]) {
                memo[i][j][k] = helper(i, j + 1, k + 1)
                if (memo[i][j][k]) return true;
            }
            memo[i][j][k] = false;
            return false;
        }

        return helper(0, 0, 0);
    }
}
