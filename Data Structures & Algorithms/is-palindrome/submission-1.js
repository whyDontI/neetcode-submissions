class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let chars = s.replace(/[^a-zA-Z0-9]/g, "").trim().split("").filter((c) => c !== " ");

        let front = 0;
        let back = chars.length - 1;

        console.log(chars);
        while(front < back) {
            if (chars[front].toLowerCase() !== chars[back].toLowerCase()) {
                console.log(chars[front], chars[back], front, back)
                return false;
            }
            front++;
            back--;
        }

        return true;
    }
}
