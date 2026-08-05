class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const memo = new Map();

        const helper = (i, currentString) => {
            if (currentString === t) return 1;
            if (i >= s.length) return 0;
            if (currentString.length > t.length) return 0;

            const key = `${i}_${currentString}`;
            if (memo.has(key)) return memo.get(key);

            const result = helper(i + 1, currentString + s[i]) + helper(i + 1, currentString);
            memo.set(key, result);

            return result;
        };

        return helper(0, "")
    }
}
