class Group {
    constructor() {
        this.set = new Set();
    }

    add(v) {
        if (v === ".") return true;
        if (this.set.has(v)) {
            return false;
        }
        this.set.add(v);
        return true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board) {
        for(let i = 0; i < 9; i++) {
            let rowGroup = new Group();
            let columnGroup = new Group();

            for (let j = 0; j < 9; j++) {
                // Check all rows
                if (!rowGroup.add(board[i][j])) {
                    console.log(i, j, board[i][j], "== Row false")
                    return false;
                }

                // Check all columns
                if (!columnGroup.add(board[j][i])) {
                    console.log(j, i, board[j][i], "== Column false")
                    return false;
                }
            }
        }

        // Check all 3 * 3 boxes
        // Get all the starting indexes of 3*3 sub-boxes
        let boxIndexes = [
            [0, 0], [0, 3], [0, 6],
            [3, 0], [3, 3], [3, 6],
            [6, 0], [6, 3], [6, 6],
        ];
        for (let [row, col] of boxIndexes) {
            let boxGroup = new Group();
            for (let i = row; i<row+3; i++) {
                for (let j = col; j < col + 3; j++ ) {
                    if (!boxGroup.add(board[i][j])) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
}


// board=[
//     ["1","2",".",".","3",".",".",".","."],
//     ["4",".",".","5",".",".",".",".","."],
//     [".","9","8",".",".",".",".",".","3"],
//     ["5",".",".",".","6",".",".",".","4"],
//     [".",".",".","8",".","3",".",".","5"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".",".",".",".",".",".","2",".","."],
//     [".",".",".","4","1","9",".",".","8"],
//     [".",".",".",".","8",".",".","7","9"]
// ]


board=[
    ["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","1",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]
]


