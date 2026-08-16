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
    diameterOfBinaryTree(root) {
        let max = 0;

        const helper = (node) => {
            if (!node) return 0;

            let left = helper(node.left);
            let right = helper(node.right);
            let distance = left + right;

            max = Math.max(
                max,
                distance
            );

            return 1 + Math.max(
                left,
                right
            )
        }

        helper(root);

        return max;
    }
}
