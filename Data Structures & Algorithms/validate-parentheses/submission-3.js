class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        let brackets = {
            ')': '(',
            ']': '[',
            '}': '{',
        }

        for(let i = 0; i < s.length; i++) {
            // is it closing bracket && is the last element is the opening bracket of the same type
            if (Object.hasOwn(brackets, s[i])) {
                if (stack[stack.length - 1] === brackets[s[i]]) {
                    stack.pop()
                } else {
                    return false;
                }
            } else {
                stack.push(s[i]);
            }
        }
        
        return stack.length === 0;
    }
}
