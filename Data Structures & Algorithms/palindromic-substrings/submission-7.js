class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        let memo = Array.from({ length: s.length }, () => Array(s.length).fill(false));

        for (let start = s.length - 1; start >= 0; start--) {
            for (let end = start; end < s.length; end++) {
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
