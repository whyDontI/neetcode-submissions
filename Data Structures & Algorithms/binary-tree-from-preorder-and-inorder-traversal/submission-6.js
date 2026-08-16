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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inorderIndexes = new Map();

        for (let i = 0; i < inorder.length; i++) {
            inorderIndexes.set(inorder[i], i);
        }

        let preorderIndex = 0;

        const build = (left, right) => {
            if (left > right) {
                return null;
            }

            const root = new TreeNode(preorder[preorderIndex]);
            preorderIndex++;
            const mid = inorderIndexes.get(root.val);

            root.left = build(left, mid - 1);
            root.right = build(mid + 1, right);

            return root;
        }

        return build(0, inorder.length - 1);
    } 
}
