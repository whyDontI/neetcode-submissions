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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const smallElement = [];

        const dfs = (node) => {
            if (!node) return null;
            if (smallElement.length >= k) {
                return;
            }
            dfs(node.left);
            smallElement.push(node.val);
            dfs(node.right);
        }

        dfs(root);
        return smallElement[k - 1];
    }
}
