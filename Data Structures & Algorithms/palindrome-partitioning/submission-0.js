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

        const getPartitions = (start) => {
            if (start >= s.length) {
                results.push([...currentSet])
                return;
            }

            for(let end = start; end < s.length; end++) {
                const currentString = s.slice(start, end + 1);

                if(isPalindrome(s, start, end)) {
                    currentSet.push(currentString);

                    getPartitions(end + 1);

                    currentSet.pop();
                }
            }
        }

        getPartitions(0);
        return results;
    }
}
