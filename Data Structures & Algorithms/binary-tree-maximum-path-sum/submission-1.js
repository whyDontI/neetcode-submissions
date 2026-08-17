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
     * @return {number}
     */
    maxPathSum(root) {
        let max = root.val;

        const helper = (node) => {
            if (!node) return 0;

            let left = Math.max(helper(node.left), 0);
            let right = Math.max(helper(node.right), 0);

            max = Math.max(max, node.val + left + right);

            return node.val + Math.max(left, right);
        };

        helper(root);
        return max;
    }
}
