class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const memo = Array(matrix.length + 1).fill(null).map(() => Array(matrix[0].length + 1).fill(null));
        const directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1]
        ];

        const isIOutOfBounds = (i) => i < 0 || i >= matrix.length;
        const isJOutOfBounds = (j) => j < 0 || j >= matrix[0].length;

        const helper = (i, j) => {
            if (isIOutOfBounds(i)) return 0;
            if (isJOutOfBounds(j)) return 0;

            if (memo[i][j] !== null) return memo[i][j];

            const results = [0];
            directions.forEach(([a, b]) => {
                const nextI = i + a;
                const nextJ = j + b;

                if (!isIOutOfBounds(nextI) && !isJOutOfBounds(nextJ)) {
                    // console.log(matrix[nextI][nextJ], nextI, nextJ, i, j)
                    if (matrix[nextI][nextJ] > matrix[i][j]) {
                        results.push(helper(nextI, nextJ))
                    }
                }
            })

            memo[i][j] = 1 + Math.max(...results)
            return memo[i][j];
        }

        let max = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                max = Math.max(
                    max,
                    helper(i, j)
                )
            }
        }

        return max;
    }
}
