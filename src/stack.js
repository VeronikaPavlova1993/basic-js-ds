const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
     }
  }
 
  class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(element) {
    const node = new Node(element);
    if (this.top){
      node.next = this.top;
      this.top = node;
    } else{
      this.top = node
    }
    this.length++;
    };

  pop() {
    const given = this.top;
    this.top = this.top.next;
    this.length--;
    return given.element;
  }

  peek() {
   return this.top.element;
  }

  }
  let stack = new Stack();
module.exports = {
  Stack
};
