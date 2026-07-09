class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let frequency = new Map() // Char => count
        let start = 0;
        let end = 0;
        let mostFrequentCharCount = 0
        let mostFrequentChar = s[0];
        let maxSubarray = 0;

        while (start <= end && end < s.length) {
            if (!frequency.has(s[end])) {
                frequency.set(s[end], 0);
            }
            frequency.set(s[end], frequency.get(s[end]) + 1);
            mostFrequentCharCount = Math.max(frequency.get(s[end]), mostFrequentCharCount);

            let currentWindowLength = end - start + 1;
            if (currentWindowLength - mostFrequentCharCount <= k) {
                maxSubarray = Math.max(maxSubarray, currentWindowLength);
            } else {
                if (s[start] === mostFrequentChar) {
                    mostFrequentCharCount--;
                }
                frequency.set(s[start], frequency.get(s[start]) - 1);
                start++;
            }

            end++;
        }

        return maxSubarray;
    }
}
