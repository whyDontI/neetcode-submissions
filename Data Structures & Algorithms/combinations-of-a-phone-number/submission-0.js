class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let map = new Map();
        map.set('2', ['a', 'b', 'c']);
        map.set('3', ['d', 'e', 'f']);
        map.set('4', ['g', 'h', 'i']);
        map.set('5', ['j', 'k', 'l']);
        map.set('6', ['m', 'n', 'o']);
        map.set('7', ['p', 'q', 'r', 's']);
        map.set('8', ['t', 'u', 'v']);
        map.set('9', ['w', 'x', 'y', 'z']);

        const results = [];

        const dfs = (i, currentString) => {
            if (digits.length === 0) return [];
            if (i >= digits.length) {
                results.push(currentString);
                return;
            }

            let chars = map.get(digits[i]);
            for (let start = 0; start < chars.length; start++) {
                dfs(i + 1, currentString + chars[start]);
            }
        };

        dfs(0, "");
        return results;
    }
}
