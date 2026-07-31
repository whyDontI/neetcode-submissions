class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const visited = [];
        const getWord = (r, c, i) => {
            // if (i >= word.length) return true;
            if (r < 0 || c < 0) {
                return false;
            }

            if (r >= board.length || c >= board[0].length) {
                return false;
            }

            if (visited[r][c]) return false;

            if (board[r][c] !== word[i]) {
                return false;
            }
            visited[r][c] = true;

            if (board[r][c] === word[i] && i + 1 === word.length) {
                return true;
            }

            // up
            const up = getWord(r - 1, c, i + 1);

            // right
            const right = getWord(r, c + 1, i + 1);

            // down
            const down = getWord(r + 1, c, i + 1);

            // left
            const left = getWord(r, c - 1, i + 1);

            const found = up || right || down || left;
            visited[r][c] = false;
            return found;
        };

        for (let r = 0; r < board.length; r++) {
            visited.push([]);
            for (let c = 0; c < board[0].length; c++) {
                visited[r][c] = false;
            }
        }

        // call getWord on every cell
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                const result = getWord(r, c, 0);
                if (result) {
                    return true;
                }
            }
        }

        return false;
    }
}
