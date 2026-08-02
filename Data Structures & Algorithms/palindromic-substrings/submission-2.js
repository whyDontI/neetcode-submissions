class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        const memo = Array.from({ length: s.length }, () => Array(s.length).fill(null));

        const isPalindrome = (start, end) => {
            if (start >= end) return true;
            if (memo[start][end] !== null) return memo[start][end];

            if (s[start] === s[end]) {
                memo[start][end] = isPalindrome(start + 1, end - 1);
            } else {
                memo[start][end] = false;
            }

            return memo[start][end];
        }

        for (let start = 0; start < s.length; start++) {
            for (let end = start; end < s.length; end++) {
                if(isPalindrome(start, end)) {
                    count++;
                }
            }
        }

        return count;
    }
}
