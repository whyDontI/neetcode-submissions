class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map(); // "act": sortedCharsKey => ["cat", "act"]: actual strings
        let key = strs[0].split("").sort().join("")
        for (let i = 0; i<strs.length; i++) {
            let key = strs[i].split("").sort().join("")
            if (!map.has(key)) {
                map.set(key, new Array());
            }
            let anagramArray = map.get(key);
            anagramArray.push(strs[i]);
            map.set(key, anagramArray);
        }


        return [...map.values()];
    }
}
