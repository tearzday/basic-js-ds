const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addNode(this.tree, data);

    function addNode(node, date) {
      if (!node) {
        return new Node(date);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > date) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasNode(this.tree, data);

    function hasNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.tree, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      }

      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      }

      if (node.data === data) {
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

        if (node.left && node.right) {
          let minNodeRight = node.right;

          while (minNodeRight.left) {
            minNodeRight = minNodeRight.left;
          }

          node.data = minNodeRight.data;
          node.right = removeNode(node.right, minNodeRight.data);

          return node;
        }
      }
    }
  }

  min() {
    let node = this.tree;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    let node = this.tree;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
