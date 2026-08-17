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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) return true; // Empty subtree is possible
        if (!root) return false; // Empty tree when subtree is valid

        if (this.isSameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(a, b) {
        if (!a && !b) return true;
        if (!a || !b) return false;

        if (a.val !== b.val) return false;

        return this.isSameTree(a.left, b.left) && this.isSameTree(a.right, b.right);
    }
}
