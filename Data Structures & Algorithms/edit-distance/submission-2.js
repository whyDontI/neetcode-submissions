class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        // Return Min # of operations
        // Insert a char -> Increase count when no match
        // Delete a char -> skip one char when no match
        // Replace a char -> skip one char when no match
        const memo = Array(word1.length).fill(null).map(() => Array(word2.length).fill(null));
        const helper = (i, j) => {
            if (i === word1.length && j === word2.length) return 0;
            if (i >= word1.length) return word2.length - j;
            if (j >= word2.length) return word1.length - i;

            if (memo[i][j] !== null) return memo[i][j];

            if (word1[i] === word2[j]) {
                memo[i][j] = helper(i + 1, j + 1);
            } else {
                memo[i][j] = 1 + Math.min(
                    helper(i + 1, j),
                    helper(i, j + 1),
                    helper(i + 1, j + 1),
                )
            }

            return memo[i][j];
        }

        return helper(0, 0);
    }
}
