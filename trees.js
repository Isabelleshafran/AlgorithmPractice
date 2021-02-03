//  function TreeNode(val, left, right) {
//       this.val = (val===undefined ? 0 : val)
//       this.left = (left===undefined ? null : left)
//       this.right = (right===undefined ? null : right)
//   }

//   /**
//  * @param {TreeNode} root
//  * @param {number} low
//  * @param {number} high
//  * @return {TreeNode}
//  */

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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */

const trimBST = function (root, low, high) {
  if (root === null) {
    return null;
  }

  //root = [3,0,4,null,2,null,null,1], low = 1, high = 3

  root.left = trimBST(root.left, low, high);
  console.log(root.left);
  root.right = trimBST(root.right, low, high);

  if (root.val < low) {
    root = root.right;
  } else if (root.val > high) {
    root = root.left;
  }

  return root;
};

// Input: (root = [3, 0, 4, null, 2, null, null, 1]), (low = 1), (high = 3);
// Output: [3, 2, null, 1];

console.log(trimBST([3, 0, 4, null, 2, null, null, 1], 1, 3));