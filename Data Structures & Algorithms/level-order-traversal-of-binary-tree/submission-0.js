/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = [];
        this.bfs(root, result, 0);

        return result;
    }

    bfs(root, result, index) {
        if (!root) return;
        if (Array.isArray(result[index])) {
            result[index].push(root.val);
        } else {
            result[index] = [root.val];
        }

        this.bfs(root.left, result, index + 1);
        this.bfs(root.right, result, index + 1);
    }
}
