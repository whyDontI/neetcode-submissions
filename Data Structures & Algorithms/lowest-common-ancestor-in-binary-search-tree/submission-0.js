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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (p > q) return this.lowestCommonAncestor(root, q, p);
        if (p.val < root.val && q.val < root.val) { // both less than root.val
            return this.lowestCommonAncestor(root.left, q, p);
        }
        if (p.val > root.val && q.val > root.val) { // both greater than root.val
            return this.lowestCommonAncestor(root.right, q, p);
        }

        if (p.val <= root.val && q.val >= root.val) {
            return root;
        }
        return root;
    }
}
