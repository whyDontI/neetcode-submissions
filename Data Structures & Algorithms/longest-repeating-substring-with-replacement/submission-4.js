class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let frequency = new Map(); // char => count
        let start = 0;
        let end = 0;
        let mostFrequentChar = s[0];
        let mostFrequentCharCount = 0;
        let maxLength = 0;

        while (start <= end && end < s.length) {
            if (!frequency.has(s[end])) {
                frequency.set(s[end], 0);
            }
            frequency.set(s[end], frequency.get(s[end]) + 1);

            if (frequency.get(s[end]) > mostFrequentCharCount) {
                mostFrequentCharCount = Math.max(frequency.get(s[end]), mostFrequentCharCount);
                mostFrequentChar = s[end];
            }

            let substringLength = end - start + 1;
            if (substringLength - mostFrequentCharCount <= k) {
                maxLength = Math.max(maxLength, substringLength);
            } else {
                if (mostFrequentChar === s[start]) {
                    mostFrequentCharCount--;
                }
                frequency.set(s[start], frequency.get(s[start]) - 1);
                start++;
            }

            end++
        }

        return maxLength;
    }
}
