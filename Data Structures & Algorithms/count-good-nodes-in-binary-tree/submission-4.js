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
    goodNodes(root) {
        const helper = (maxSoFar, node) => {
            if (!node) return 0;
            let count = node.val >= maxSoFar ? 1 : 0;
            maxSoFar = Math.max(node.val, maxSoFar);

            count += helper(maxSoFar, node.left);
            count += helper(maxSoFar, node.right);

            return count;
        }

        return helper(root.val, root);
    }
}
