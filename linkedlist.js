const _Node = require('./_Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    // if the linkedlist is empty
    if (this.head === null) {
      this.insertFirst(item);
    }

    let tempNode = this.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }

    tempNode.next = new _Node(item, null);
  }

  insertBefore(item, node) {
    let currNode = this.head;
    let prevNode = this.head;

    if (this.head === null) {
      this.insertFirst(item);
    }

    while (currNode.value !== node) {
      prevNode = currNode;
      currNode = currNode.next;

      if (currNode.next === null) {
        console.log('no node found');
        return;
      }
    }
    prevNode.next = new _Node(item, currNode);
  }

  insertAfter(item, node) {
    let currNode = this.head;
    let nextNode = this.head;

    if (this.head === null) {
      this.insertFirst(item);
    }

    while (currNode.value !== node) {
      currNode = currNode.next;
      nextNode = currNode.next;

      if (currNode.next === null) {
        console.log('no node found');
        return;
      }
    }
    currNode.next = new _Node(item, nextNode);
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        console.log('no node found');
        return;
      }
      currNode = currNode.next;
    }
    console.log(currNode);
    return currNode;
  }

  remove(item) {
    let currNode = this.head;
    let prevNode = this.head;

    while (currNode.value !== item && currNode.next !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('item not found');
      return;
    }

    prevNode.next = currNode.next;
  }
}

const main = () => {
  const SSL = new LinkedList();

  const newData = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];

  newData.forEach(ele => SSL.insertLast(ele));

  SSL.insertAfter('Jonespi', 'Boomer');

  SSL.find('Jonespi');

  console.log(SSL);
};

main();
