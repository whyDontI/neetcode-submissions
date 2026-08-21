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

        const maxStraightLinePathSum = (node) => {
            if (!node) return 0;

            const left = Math.max(maxStraightLinePathSum(node.left), 0);
            const right = Math.max(maxStraightLinePathSum(node.right), 0);

            const maxPathWithCurrentNode = node.val + left + right;

            if (max < maxPathWithCurrentNode) {
                max = maxPathWithCurrentNode;
            }

            return node.val + Math.max(left, right);
        };

        maxStraightLinePathSum(root);

        return max;
    }
}
