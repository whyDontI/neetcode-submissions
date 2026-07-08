class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map(); // Number => frequency
        for(let n of nums) {
            if (!map.has(n)) {
                map.set(n, 0);
            }

            map.set(n, map.get(n) + 1);
        }

        let answer = [...map.entries()].sort(([, valueA], [, valueB]) => valueB - valueA);
        console.log(answer)
        answer = answer.map(([k, _]) => k);
        return answer.splice(0, k);
    }
}
