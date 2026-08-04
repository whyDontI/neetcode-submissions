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
        .map(() => Array(s2.length + 1).fill(null));
        
        // s1 index, s2 index
        const helper = (i, j) => {
            if (i === s1.length && j === s2.length) return true;
            
            if (memo[i][j] !== null) return memo[i][j];
            
            let k = i + j;
            let ans = false;

            if (i < s1.length && s3[k] === s1[i]) {
                ans = ans || helper(i + 1, j);
            }
            
            if (j < s2.length && s3[k] === s2[j]) {
                ans = ans || helper(i, j + 1);
            }

            memo[i][j] = ans;
            return memo[i][j];
        }

        return helper(0, 0);
    }
}
