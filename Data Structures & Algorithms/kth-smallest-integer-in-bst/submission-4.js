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

        const postOrderTraversal = (node, k) => {
            if (!node) return null;
            if (result.length >= k) {
                return;
            }
            postOrderTraversal(node.left, k);
            result.push(node.val);
            postOrderTraversal(node.right, k);

        }

        postOrderTraversal(root, k);
        console.log("result => ", result)
        return result[k - 1];
    }

}
