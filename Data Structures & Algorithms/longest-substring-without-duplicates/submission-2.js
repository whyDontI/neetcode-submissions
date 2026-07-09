class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let uniqueChars = new Set();
        let start = 0;
        let end = 0;
        let max = 0;
        while(start <= end && end < s.length) {
            if (uniqueChars.has(s[end])) {
                max = Math.max(max, end - start);
                if (s[start] === s[end]) {
                    uniqueChars.delete(s[start]);
                    start++;
                } else {
                    uniqueChars.clear();
                    start = end;
                }
            }
            uniqueChars.add(s[end]);
            end++;
        }

        return Math.max(max, end - start);
    }
}
