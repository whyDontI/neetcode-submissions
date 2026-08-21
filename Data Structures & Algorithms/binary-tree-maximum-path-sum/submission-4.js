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
        let max = -Infinity;

        const maxSum = (node) => {
            if (!node) return 0;
            const left = Math.max(maxSum(node.left), 0);
            const right = Math.max(maxSum(node.right), 0);


            const currentMaxPath = node.val + left + right;

            if (currentMaxPath > max) {
                max = currentMaxPath;
            }
            return node.val + Math.max(left, right);
        };

        maxSum(root);

        return max;
    }
}
