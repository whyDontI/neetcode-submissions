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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let result = [];
        this.inorder(root, result);
        return result[k - 1];
    }

    inorder(node, arr) {
        if (!node) return;
        this.inorder(node.left, arr);
        arr.push(node.val);
        this.inorder(node.right, arr);
    }
}
