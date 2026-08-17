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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const preorder = [];

        const bfs = (node) => {
            const queue = [node];
            while(queue.length > 0) {
                const curr = queue.shift();
                if (!curr) {
                    preorder.push("null");
                    continue;
                }
                preorder.push(curr.val);
                queue.push(curr?.left || null);
                queue.push(curr?.right || null)
            }
        }

        bfs(root);
        return preorder.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (data.length <= 0) return [];

        // 1 indexed
        const preorder = data.split(",");
        
        const buildTree = (node, i) => {
            if (i - 1 >= preorder.length) return null;
            if (!node) return null;

            const leftIndex = (i * 2) + 1;
            const rightIndex = leftIndex + 1;

            if (leftIndex < preorder.length) {
                node.left = new TreeNode(preorder[leftIndex]);
            }
            if (rightIndex < preorder.length) {
                node.right = new TreeNode(preorder[rightIndex]);
            }

            buildTree(node.left, leftIndex);
            buildTree(node.right, rightIndex);
            return node;
        }

        const root = new TreeNode(preorder[0]);
        return buildTree(root, 0);
    }
}
