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

        const heightOfTree = (node) => {
            if (!node) return 0;
            const left = heightOfTree(node.left);
            const right = heightOfTree(node.right);
            console.log(node.val, left, right);
            max = Math.max(
                max,
                // 1 + Math.max(left, right),
                left + right,
            )
            return 1 + Math.max(left, right)
        }

        heightOfTree(root);
        return max;
    }
}
