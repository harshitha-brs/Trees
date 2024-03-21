/** 
 Author : Build Rise Shine 

Created : 2023 

Script : Binary Search Tree 

Description : Implementation of BST Data Structure

  The BST class represents a custom implementation of a Binary Search Tree (BST) data structure in JS. 
  It provides methods to perform basic operations on a BST, such as inserting elements in their proper 
  places and checking if a specific value is present in the tree. 
  
  A BST is a binary tree data structure in which each node has at most two children. The left child of 
  a node contains values less than the node's value, and the right child contains values greater than 
  the node's value. The example demonstrates how to create an instance of the BST class and perform insert 
  and contains operations on it.


(c) Copyright by BRS Studio. 
**/

// Class for creating a Node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Class for BST
class BST {
  constructor() {
    this.root = null;
  }

  // inserting node
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

// Implementation
let myTree = new BST();
myTree.insert(40);
myTree.insert(30);
myTree.insert(50);
myTree.insert(25);
myTree.insert(35);
myTree.insert(45);
myTree.insert(60);

console.log(myTree.contains(30));

console.log("The BST is");
console.log(myTree);
