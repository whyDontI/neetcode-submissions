class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let sChars = s.split('').sort();
        let tChars = t.split('').sort();
        for (let i = 0; i<sChars.length; i++) {
            if (sChars[i] !== tChars[i]) {
                return false;
            }
        }

        return true;
    }
}
