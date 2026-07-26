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
        if (!subRoot) return true; // Empty subTree is a valid subTree
        if (!root) return false; // Empty root tree while sub tree is valid

        if (this.isSameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(a, b) {
        if (!a && !b) return true; // both null
        if (!a || !b) return false; // One node null

        if (a.val != b.val) return false; // Value doesn't match

        return this.isSameTree(a.left, b.left) && this.isSameTree(a.right, b.right);
    }
}
