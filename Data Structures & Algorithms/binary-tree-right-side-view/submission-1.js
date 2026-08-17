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
     * @return {number[]}
     */
    rightSideView(root) {
        const levels = new Map(); // Level -> [node1, node2, node3]
        this.dfs(root, levels, 1);
        return [...levels.values()].map((arr) => arr[arr.length - 1]);
    }

    dfs(root, levels, level) {
        if (!root) return null;
        if (!levels.has(level)) {
            levels.set(level, []);
        }
        levels.set(level, [...levels.get(level), root.val]);
        this.dfs(root.left, levels, level + 1);
        this.dfs(root.right, levels, level + 1);
    }
}
