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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true;
        let isBalanced = true;

        const heightOfTree = (node) => {
            if(!node) return 0;

            let left = heightOfTree(node.left);
            let right = heightOfTree(node.right);

            if (Math.abs(left - right) > 1 && isBalanced) {
                isBalanced = false
            }

            return 1 + Math.max(left, right);
        }

        heightOfTree(root);


        return isBalanced;
    }
}
