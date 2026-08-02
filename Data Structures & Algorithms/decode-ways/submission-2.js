class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        // Ignore leading zero
        // Ignore numbers > 26

        let count = 0;
        let memo = Array(s.length).fill(null);

        const dfs = (i) => {
            if (s[i] === "0") return 0;
            if (i === s.length) return 1;
            if (i > s.length) return 0;
            if (memo[i] !== null) return memo[i];

            let result = dfs(i + 1);
            if (i + 1 < s.length && Number(s.slice(i, i+2)) <= 26) {
                result += dfs(i + 2);
            }

            memo[i] = result;
            return result;
        };

        return dfs(0);
    }
}
