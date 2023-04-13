const { NotImplementedError } = require('../extensions/list-tree');

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
  constructor(data) {
    this.root = null;
 }
  root() {
    this.root = writeRoot(this.root, data);
    function writeRoot(node, data) {
    if (!node) {
      return null;
    }
    else {
      return node;
    }
  }
}
  add(date) {
    this.root = addInsideTree(this.root, date)
      function addInsideTree(node, date) {
          if (!node) {
              return new Node(date);
          }
          if (node.data === date) {
              return node;
          }
          if (date < node.data){
              node.left = addInsideTree(node.left, date)
          }
          else {
              node.right = addInsideTree(node.right, date)
          }
          return node;
      }
  }
  has(data) {
    return searchInsideTree(this.root, data);

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
    this.root = removeDateTree(this.root, data);
    function removeDateTree(node, data) {
      if (!node) {
          return null;
      }
      if (data < node.data) {
          node.left = removeDateTree(node.left, data);
          return node;
      }
      else if (node.data < data) {
          node.right = removeDateTree(node.right, data);
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
          node.right = removeDateTree(node.right, minimalRight.data);
          return node;
      }
    }
  }
 find(data) {
    throw new NotImplementedError('Not implemented');
  }
 min() {
    if (!this.root) {
      return
    }
  let seeker = this.root;
  while (seeker.left) {
      seeker = seeker.left;
  }
  return seeker.data;
  }
 max() {
    if (!this.root) {
      return
    }
  let seeker = this.root;
  while (seeker.right) {
      seeker = seeker.right;
  }
  return seeker.data;
 }
}

module.exports = {
  BinarySearchTree
};