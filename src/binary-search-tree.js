//const { NotImplementedError } = require('../extensions/list-tree');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.footing = null;
 }
  root() {
      return this._root;
    }
  add(data) {
    this.footing = addInsideTree(this.footing, data)
      function addInsideTree(node, data) {
          if (!node) {
              return new Node(data);
          }
          if (node.data === data) {
              return node;
          }
          if (data < node.data){
              node.left = addInsideTree(node.left, data)
          }
          else {
              node.right = addInsideTree(node.right, data)
          }
          return node;
      }
  }
  has(data) {
    return searchInsideTree(this.footing, data);

    function searchInsideTree(node, data) {
        if (!node) {
            return false;
        }
        if (node.data === data) {
            return true;
        }
        return data < node.data ? 
        searchInsideTree(node.left, data) :
        searchInsideTree(node.right, data);
    };
  }
  remove(data) {
    this.footing = removeDataTree(this.footing, data);
    function removeDataTree(node, data) {
      if (!node) {
          return null;
      }
      if (data < node.data) {
          node.left = removeDataTree(node.left, data);
          return node;
      }
      else if (node.data < data) {
          node.right = removeDataTree(node.right, data);
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
          node.value = minimalRight.data;
          node.right = removeDataTree(node.right, minimalRight.data);
          return node;
      }
    }
  }
 /*find(data) {
    throw new NotImplementedError('Not implemented');
  }*/
 min() {
    if (!this.footing) {
      return
    }
  let seeker = this.footing;
  while (seeker.left) {
      seeker = seeker.left;
  }
  return seeker.data;
  }
 max() {
    if (!this.footing) {
      return
    }
  let seeker = this.footing;
  while (seeker.right) {
      seeker = seeker.right;
  }
  return seeker.data;
 }
}
const tree = new BinarySearchTree();

module.exports = {
  BinarySearchTree
};