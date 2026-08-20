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
        if (!root) return 0;

        let count = 0;

        const helper = (node, maxSoFar) => {
            if (!node) return 0;
            if (node.val >= maxSoFar) {
                count += 1;
            }

            maxSoFar = Math.max(node.val, maxSoFar);

            helper(node.left, maxSoFar);
            helper(node.right, maxSoFar);

            return count;
        }

        helper(root, root.val);

        return count;
    }
}
