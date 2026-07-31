class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const visited = [];

        const findWord = (r, c, i) => {
            if (r < 0 || c < 0) return false;
            if (r >= board.length || c >= board[0].length) return false;
            if (visited[r][c]) return false;
            if (i > word.length) return true;
            if (i < word.length && board[r][c] !== word[i]) return false;

            visited[r][c] = true;

            const up = findWord(r - 1, c, i+1);
            const right = findWord(r, c + 1, i+1);
            const down = findWord(r + 1, c, i+1);
            const left = findWord(r, c - 1, i+1);

            const found = up || right || down || left;
            visited[r][c] = false;
            return found || i + 1 === word.length
        }

        for (let r = 0; r<board.length; r++) {
            visited.push([]);
            for (let c = 0; c<board[0].length; c++) {
                visited[r].push(false);
            }
        }

        for (let r = 0; r<board.length; r++) {
            for (let c = 0; c<board[0].length; c++) {
                const found = findWord(r, c, 0);
                if (found) return true;
            }
        }

        return false;
    }
}
