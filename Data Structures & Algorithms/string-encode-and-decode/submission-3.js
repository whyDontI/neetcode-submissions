class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => {
            let asciiChars = str.split("").map((c) => c.charCodeAt(0));
            return [str.length, ...asciiChars].join("🚀");
        }).join("#")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") return [];
        console.log(str)
        let strings = str.split("#");
        let answer = [];

        strings.forEach((s) => {
            let [len, ...asciiChars] = s.split("🚀");
            if(len === 0) {
                answer.push("");
            } else {
                let ans = asciiChars.map((c) => String.fromCharCode(c))
                answer.push(ans.join(""))
            }
        })
        return answer;
    }
}
