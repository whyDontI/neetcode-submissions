class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        let n = s.length
        let memo = Array.from({ length: n}, () => Array(n).fill(false));

        for (let start = n - 1; start >= 0; start--) {
            for (let end = start; end < n; end++) {
                if (
                    s[start] === s[end]
                    && (
                        end - start <= 1
                        || memo[start + 1][end - 1]
                    )
                ) {
                    memo[start][end] = true;
                    count++;
                }
            }
        }

        return count;
    }
}
