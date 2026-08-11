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
    isValidBST(root) {

        const helper = (root, min, max) => {
            if (!root) return true;
            // console.log(min, root.val, max)

            if (min < root.val && root.val < max) {
                let left = root.left ? false : true;
                let right = root.right ? false : true;

                if (root.left && root.left.val < root.val) {
                    left = helper(root.left, min, root.val);
                }
                if (root.right && root.val < root.right.val) {
                    right = helper(root.right, root.val, max);
                }
                
                return left && right;
            }
            return false;
        }

        return helper(root, -Infinity, +Infinity)
    }
}
