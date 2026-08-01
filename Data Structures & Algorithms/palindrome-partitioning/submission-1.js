class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const results = [];
        const currentSet = [];

        const isPalindrome = (str, start, end) => {
            if (str === "") return false;
            while(start < end) {
                if (str[start] !== str[end]) {
                    return false;
                }
                start++;
                end--;
            }

            return true;
        };

        const dfs = (start) => {
            if (start === s.length) {
                results.push([...currentSet]);
                return;
            };

            for(let end = start; end < s.length; end++) {
                let currentSubString = s.slice(start, end + 1);

                if (isPalindrome(s, start, end)) {
                    currentSet.push(currentSubString);

                    dfs(end + 1);

                    currentSet.pop();
                }
            }
        }

        dfs(0);
        return results;
    }
}
