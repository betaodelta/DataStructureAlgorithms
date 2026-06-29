/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    function dfs(node, curr) {
        if (node === null) return 0;

        // build binary number
        curr = (curr << 1) | node.val;

        // leaf node
        if (node.left === null && node.right === null) {
            return curr;
        }

        return dfs(node.left, curr) + dfs(node.right, curr);
    }

    return dfs(root, 0);
};