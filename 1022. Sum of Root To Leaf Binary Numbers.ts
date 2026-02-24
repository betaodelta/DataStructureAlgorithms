/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumRootToLeaf(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, curr: number): number {
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