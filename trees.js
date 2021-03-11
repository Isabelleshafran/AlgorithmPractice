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

// console.log(trimBST([3, 0, 4, null, 2, null, null, 1], 1, 3))


// BINARY SEARCH TREES 

class Node {
  constructor(data, left = null, right = null){
    this.data = data; 
    this.left = left; 
    this.right = right;
  }
}

class BST {
  constructor(){
    this.root = null;
  }

  add(data){
    const node = this.root; 
    if(node === null){
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node){
        if(data < node.data){
          if(node.left === null){
            node.left = new Node(data);
            return;
          } else if (node.left !== null){
            return searchTree(node.left)
          }
        } else if (data > node.data){
          if(node.right === null){
            node.right = new Node(data);
            return;
          } else if (node.right !== null){
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree(node)
    }
  }

  findMin(){
    let current = this.root; 
    while(current.left !== null){
      current = current.left
    }
    return current.data;
  }

  findMax(){
    let current = this.root; 
    while(current.right !== null){
      current = current.right
    }
    return current.data
  }

  isPresent(data){
    let current = this.root; 

    while(current){
      if(data === current.data){
        return true;
      }

      if(data < current.data){
        current = current.left
      } else {
        current = current.right
      }
    }
    return false;
  }


  remove(data){
    const removeNode = function(node, data){
      if(node === null){
        return null
      }

      // if we've found the node we want to remove
      if(data === node.data){

        // if it has no children 
        if(node.left === null && node.right === null){
          return null;
        }

        if(node.left === null){
          return node.right
        }

        if(node.right === null){
          return node.left
        }

        // node has two children 

        let tempNode = node.right; 
        while(tempNode.left !== null){
          tempNode = tempNode.left
        }

        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node;
      } else if (data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }

    }
    this.root = removeNode(this.root, data)
  }

}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(4));


// console.log(bst);


let x = 0; 

for(let i = 0; i < 10000000; i++){
  x = x+1
}

console.log(x)