/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int dfs(TreeNode* root, int curr) {
        if(root == NULL)
            return 0;

        // form binary number
        curr = (curr << 1) | root->val;

        // if leaf → return number
        if(root->left == NULL && root->right == NULL)
            return curr;

        // sum of left and right
        return dfs(root->left, curr) + dfs(root->right, curr);
    }
    int sumRootToLeaf(TreeNode* root) {
        return dfs(root, 0);
        
    }
};