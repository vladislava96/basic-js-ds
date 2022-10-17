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
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}
 class Stack {
  constructor() {
    this.node = null;
  }

  push(element) {
    this.node = new Node(element, this.node);
  }
  
  pop() {
    if (this.node === null) {
      return null;
    }

    let node = this.node;
    this.node = node.next;

    return node.value;
  }

  peek() {
    if (this.node === null) {
      return null;
    }

    return this.node.value;
  }
}

module.exports = {
  Stack
};
