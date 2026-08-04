class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const memo = Array(matrix.length).fill(null).map(() => Array(matrix[0].length).fill(null));

        const helper = (i, j) => {
            console.log(i, j, matrix[i][j]);
            if (i >= matrix.length || i < 0) return 0;
            if (j >= matrix[0].length || j < 0) return 0;

            if (memo[i][j] !== null) return memo[i][j];
            
            let results = [0];
            let currentElement = matrix[i][j];
            // Top
            if (i - 1 >= 0 && matrix[i - 1][j] > currentElement) {
                results.push(helper(i - 1, j));
            }

            // Right
            if (j + 1 < matrix[0].length && matrix[i][j + 1] > currentElement) {
                results.push(helper(i, j + 1));
            }

            // Down
            if (i + 1 < matrix.length && matrix[i + 1][j] > currentElement) {
                results.push(helper(i + 1, j));
            }

            // Left
            if (j - 1 >= 0 && matrix[i][j - 1] > currentElement) {
                results.push(helper(i, j - 1));
            }

            memo[i][j] = 1 + Math.max(...results);
            return memo[i][j];
        };

        const results = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                results.push(helper(i, j));
            }
        }

        return Math.max(...results);
    }
}
