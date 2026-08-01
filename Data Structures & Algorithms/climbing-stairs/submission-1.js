class Solution {
    memo = new Map();
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (this.memo.has(n)) return this.memo.get(n);
        if (n == 0 || n == 1) {
            return 1;
        }

        const result = this.climbStairs(n - 1) + this.climbStairs(n - 2);
        this.memo.set(n, result);
        return this.memo.get(n);
    }
}
