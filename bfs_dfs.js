// Binary Trees 
// - Do not have cycles 
// - Linked list is considered a tree 
// - Tree where the nodes have at most two children 

// BFS 
// Implemented with a Queue data strucutre 


function bfs(root, target) {
    let queue = [root];

    while(queue.length){
        let node = queue.shift();

        if(node.val === target) return node;

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return null;
}


// DFS 
// Implemented with a Stack 

function dfs(root, target) {
    let stack = [root];

    while(stack.length){
        let node = stack.pop();

        if(node.val === target) return node;

        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left)
    }

    return null;
}

