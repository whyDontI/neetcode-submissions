class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        // '*' Matches zero or more of the preceding element.
        // Check if index + 1 is "*"
        // 2 Choices
        // - Skip to index + 2 - we skip for the case zero char match - recurse
        // - if chars match - increment s index - recurse

        const memo = Array(s.length + 1).fill(null).map(() => Array(p.length + 1).fill(null));
        const helper = (i, j) => {
            // Base case
            // Used up all the pattern
            if (j === p.length) {
                // String has leftover chars
                if (i < s.length) {
                    return false;
                } else {
                    return true;
                }
            }

            if (memo[i][j] !== null) return memo[i][j];

            const match = i < s.length && (s[i] === p[j] || p[j] === ".");

            if (j + 1 < p.length && p[j + 1] === "*") {
                memo[i][j] = (
                    match && helper(i + 1, j) // char match + skip zero or more preceding chars
                    || helper(i, j + 2) // Zero char match
                )
            } else {
                memo[i][j] = match && helper(i + 1, j + 1);
            }

            return memo[i][j];
        }

        return helper(0, 0);
    }
}
