class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const results = [];
        const currentString = "";

        const getCombinations = (openCount, closeCount, currentString) => {
            if (openCount === n && closeCount === n && currentString.length === (n*2)) {
                results.push([...currentString].join(""));
                return;
            }

            if (openCount < n) {
                getCombinations(openCount + 1, closeCount, currentString + '(');
            }

            if (closeCount < openCount) {
                getCombinations(openCount, closeCount + 1, currentString + ')');
            }
        }

        getCombinations(0, 0, currentString)
        return results;
    }
}
