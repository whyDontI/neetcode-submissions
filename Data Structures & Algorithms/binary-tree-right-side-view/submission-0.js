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
     * @return {number[]}
     */
    rightSideView(root) {
        

        const helper = (root) => {
            if (root == null) return [];
            let rightView = []
            rightView.push(root.val);

            let leftNodes = helper(root.left);
            let rightNodes = helper(root.right);

            const largest = leftNodes.length > rightNodes.length ? leftNodes.length : rightNodes.length;
            let i = 0;
            while (i < largest) {
                rightView.push(
                    rightNodes[i] ? rightNodes[i] : leftNodes[i]
                )
                i++;
            }

            return rightView;
        }

        return helper(root);
    }
}
