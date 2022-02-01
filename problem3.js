/*
Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/


class Node {
    constructor(name, left=null, right=null) {
        this.val = name;
        this.left = left;
        this.right = right;
    }
}


function serialize(root) {
    //return the value of the current node + . + serialized  value of its left node (if exists) + . + serialized value of its right node (if exists)
    let tempStr = root.val;
    if (root.left) { tempStr += `.${serialize(root.left)}`; }
    if (root.right) { tempStr += `.${serialize(root.right)}`; }
    return tempStr;
}

function deserialize(string) {
//without including left or right child in the string, im not sure.
}

let leftLeft = new Node('leftLeft');
let leftRight = new Node('leftRight');

let left = new Node('left', leftLeft, leftRight);
let right = new Node('right');
let root = new Node('root', left, right);

console.log( serialize(root));

