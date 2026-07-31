class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const results = [];

        const getCombinations = (openCount, closeCount, currentString) => {
            // Base case
            if (openCount === n && closeCount === n && currentString.length === (2*n)) {
                results.push(currentString);
                return;
            }

            if (openCount < n) {
                getCombinations(openCount + 1, closeCount, currentString + '(');
            }

            if (closeCount < openCount) {
                getCombinations(openCount, closeCount + 1, currentString + ')');
            }
        }

        getCombinations(0, 0, "");
        return results;
    }
}
