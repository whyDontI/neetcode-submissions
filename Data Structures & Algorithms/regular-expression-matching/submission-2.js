class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const memo = Array(s.length + 1).fill(null).map(() => Array(p.length + 1).fill(null));

        const helper = (i, j) => {
            // Base case
            // Used up all the pattern
            if (j === p.length) {
                if (i < s.length) {
                    // String has leftover characters
                    return false;
                } else {
                    // i === s.length
                    // String fully processed
                    return true;
                }
            }

            if (memo[i][j] !== null) return memo[i][j];

            // Character matches or Regex has "."
            const match = i < s.length && (s[i] === p[j] || p[j] === ".")

            // Current char is preceding "*" - Next char is "*"
            if (j + 1 < p.length && p[j + 1] === "*") {
                // Choice 1 - Matches zero chars before "*" - ignore current char
                // and upcoming "*" char
                const choice1 = helper(i, j + 2);
                // Choice 2 - Matches more of the preceding chars
                const choice2 = match && helper(i + 1, j);

                memo[i][j] = choice1 || choice2;
            } else {
                // Next char isn't *
                // Only choice is to match current element and proceed to next
                memo[i][j] = match && helper(i + 1, j + 1);
            }

            return memo[i][j];
        }

        return helper(0, 0)
    }
}
