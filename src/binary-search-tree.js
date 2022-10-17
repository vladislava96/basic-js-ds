const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Branch {
  constructor() {
    this.node = null;
  }

  get min() {
    if (this.node == null) {
      return null;
    }

    return this.node.min;
  }

  get max() {
    if (this.node == null) {
      return null;
    }

    return this.node.max;
  }

  add(data) {
    if (this.node == null) {
      this.node = new Node(data);

      return;
    }

    this.node.add(data);
  }

  find(data) {
    if (this.node == null) {
      return null;
    }

    return this.node.find(data);
  }

  remove(data) {
    if (this.node == null) {
      return;
    }

    this.node = this.node.remove(data);
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.leftBranch = new Branch();
    this.rightBranch = new Branch();
  }

  get left() {
    return this.leftBranch.node
  }

  get right() {
    return this.rightBranch.node
  }

  get min() {
    let min = this.leftBranch.min;

    if (null === min) {
      min = this;
    }

    return min;
  }

  get max() {
    let max = this.rightBranch.max;

    if (null === max) {
      max = this;
    }

    return max;
  }

  add(data) {
    if (data === this.data) {
      if (le)

      return;
    }

    if (data < this.data) {
      this.leftBranch.add(data);
    } else {
      this.rightBranch.add(data);
    }
  }

  find(data) {
    if (data === this.data) {
      return this
    }

    if (data < this.data) {
      return this.leftBranch.find(data);
    } else {
      return this.rightBranch.find(data);
    }
  }

  remove(data) {
    if (data === this.data) {
      if (null === this.left) {
        return this.right;
      }

      if (null === this.right) {
        return this.left;
      }

      this.leftBranch.max.rightBranch.node = this.rightBranch.node;

      return this.left
    }

    if (data < this.data) {
      this.leftBranch.remove(data);
    } else {
      this.rightBranch.remove(data);
    }

    return this;
  }
}

class BinarySearchTree {
  constructor() {
    this.branch = new Branch();
  }

  root() {
    return this.branch.node;
  }

  add(data) {
    this.branch.add(data);
  }

  has(data) {
    return this.branch.find(data) !== null;
  }

  find(data) {
    return this.branch.find(data);
  }

  remove(data) {
    return this.branch.remove(data);
  }

  min() {
    let node = this.branch.min;

    if (node === null) {
      return null;
    }

    return node.data;
  }

  max() {
    let node = this.branch.max;

    if (node === null) {
      return null;
    }

    return node.data;
  }
}
module.exports = {
  BinarySearchTree
};