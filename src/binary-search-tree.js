//const { NotImplementedError } = require('../extensions/list-tree');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.footing = null;
 }
  root() {
      return this.footing; 
  }
  add(value) {
    this.footing = addInsideTree(this.footing, value)
      function addInsideTree(node, value) {
          if (!node) {
              return new Node(value);
          }
          if (node.value === value) {
              return node;
          }
          if (value < node.value){
              node.left = addInsideTree(node.left, value)
          }
          else {
              node.right = addInsideTree(node.right, value)
          }
          return node;
      }
  }
  has(value) {
    return searchInsideTree(this.footing, value);

    function searchInsideTree(node, value) {
        if (!node) {
            return false;
        }
        if (node.value === value) {
            return true;
        }
        return value < node.value ? 
        searchInsideTree(node.left, value) :
        searchInsideTree(node.right, value);
    };
  }
  remove(value) {
    this.footing = removeDataTree(this.footing, value);
    function removeDataTree(node, value) {
      if (!node) {
          return null;
      }
      if (value < node.value) {
          node.left = removeDataTree(node.left, value);
          return node;
      }
      else if (node.value < value) {
          node.right = removeDataTree(node.right, value);
          return node;
      } else {
          if (!node.left && !node.right) {
              return null;
          }
          if (!node.left) {
          node = node.right;
          return node;
          }
          if (!node.right) {
              node = node.left;
              return node;
          }
          let minimalRight = node.right;
          while (minimalRight.left) {
              minimalRight = minimalRight.left;
          }
          node.value = minimalRight.value;
          node.right = removeDataTree(node.right, minimalRight.value);
          return node;
      }
    }
  }
 find(value) {
  let current = this.footing;
  while (current.value !== value) {
      if (value < current.value) {
          current = current.left
      } else {
          current = current.right
      }
      if (current === null) {
          return null
      }
  }
  return current;
 }
  
 min() {
    if (!this.footing) {
      return
    }
  let seeker = this.footing;
  while (seeker.left) {
      seeker = seeker.left;
  }
  return seeker.value;
  }
 max() {
    if (!this.footing) {
      return
    }
  let seeker = this.footing;
  while (seeker.right) {
      seeker = seeker.right;
  }
  return seeker.value;
 }
}
const tree = new BinarySearchTree();

module.exports = {
  BinarySearchTree
};