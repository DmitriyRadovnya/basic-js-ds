const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(subRoot, value) {
      if (!subRoot) {
        return new Node(value);
      }

      if (value < subRoot.data) {
        subRoot.left = addNode(subRoot.left, value);
      } else if (value > subRoot.data) {
        subRoot.right = addNode(subRoot.right, value);
      }

      return subRoot;
    }
  }

  has(data) {
    return hasData(this.rootNode, data);

    function hasData(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      if (value < node.data) {
        return hasData(node.left, value);
      } else {
        return hasData(node.right, value);
      }
    }
  }

  find(data) {
    return findData(this.rootNode, data);

    function findData(node, value) {
      if (!node) {
        return null;
      }

      if (value === node.data) {
        return node;
      }

      if (value < node.data) {
        return findData(node.left, value);
      } else {
        return findData(node.right, value);
      }

    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, value) {
    if (!node) {
      return null;
    }

    if (value < node.data) {

      node.left = removeNode(node.left, value)

    } else if (value > node.data) {

      node.right = removeNode(node.right, value)

    } else {

      if (!node.right && !node.left) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {

        let minRightNode = node.right;

        while(minRightNode.left) {
          minRightNode = minRightNode.left;
        }

        node.data = minRightNode.data;
        node.right = removeNode(node.right, minRightNode.data);
      }
    }

    return node;
    }
  }

  min() {
    if (!this.rootNode) {
      return null
    }

    let node = this.rootNode;
    while(node.left) {
      node = node.left
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null
    }

    let node = this.rootNode;
    while(node.right) {
      node = node.right
    }
    
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};