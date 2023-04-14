const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.top = null;
    this.end = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let lists = '';
   let list = this.top;
   while(list) {
   lists += `{"value":${list.value},"next": ${list.next}}`;
    list = list.next;
   }
   return lists;
  }


  enqueue(value) {
   const node = new Node(value);
   if (this.top) {
    this.end.next = node;
    this.end = node;
   } else{
    this.top = node;
    this.end = node;
   }
   this.length++;
   }

  dequeue() {
    const removal = this.top;
    this.top = this.top.next;
    this.length--;
    return removal.value;
  }
}
let queue = new Queue();
module.exports = {
  Queue
};
