class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = new Map();
        for (let i = 0; i < numbers.length; i++) {
            if (!map.has(numbers[i])) {
                map.set(numbers[i], []); // num -> indexes
            }

            let exinstingIndexes = map.get(numbers[i]);
            exinstingIndexes.push(i)
            map.set(numbers[i], exinstingIndexes);
        }

        console.log(map.entries())
        for (let i = 0; i < numbers.length; i++) {
            let complimentaryNumber = target - numbers[i];
            console.log(map.get(numbers[i], " => ", complimentaryNumber))
            if (map.has(complimentaryNumber)) {
                // check if any index is < i
                let complimentaryNumIndexes = map.get(complimentaryNumber);
                console.log(complimentaryNumIndexes);
                for (let index of complimentaryNumIndexes) {
                    if (index < i) {
                        return [index + 1, i + 1];
                    } else if (index > i) {
                        return [i + 1, index + 1 ];
                    }
                }
            }
        }

        return [];
    }
}
