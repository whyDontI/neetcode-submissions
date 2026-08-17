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
        const levels = new Map(); // level# -> [node1, node2]

        const dfs = (node, level) => {
            if (!node) return null
            if (!levels.has(level)) {
                levels.set(level, []);
            }
            levels.set(level, [...levels.get(level), node.val])
            dfs(node.left, level + 1);
            dfs(node.right, level + 1);
        }

        dfs(root, 1);
        return [...levels.values()];
    }
}
