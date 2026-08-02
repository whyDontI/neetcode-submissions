class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (s.length <= 1) return s;

        const memo = Array.from({ length: s.length }, () => Array(s.length).fill(null));

        const isPalindrome = (i, j) => {
            if (i >= j) return true;
            if (memo[i][j] !== null) return memo[i][j];

            if (s[i] === s[j]) {
                memo[i][j] = isPalindrome(i + 1, j - 1);
            } else {
                memo[i][j] = false;
            }

            return memo[i][j];
        };

        let start = 0;
        let maxLength = 0;

        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                if (isPalindrome(i, j)) {
                    const currentLength = j - i + 1;
                    if (currentLength > maxLength) {
                        maxLength = currentLength;
                        start = i;
                    }
                }
            }
        }

        return s.slice(start, start + maxLength);
    }
}
