class _Node {
  constructor(value, next) {
    (this.value = value), (this.next = next);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    // 1. instantiate new node
    // 2. set new node's next to head
    // 3. set head to this new node
    this.head = new _Node(value, this.head);
  }

  insertLast(value) {
    let currentNode = this.head;
    if (currentNode === null) {
      this.insertFirst(value);
      return;
    }
    
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new _Node(value, null);
    console.log(currentNode)
  }

  insertBefore(value) {

  }

  remove(value) {
    let currentNode = this.head;
    if (currentNode === null) {
      return;
    }

    if(currentNode.value === value) {
      this.head = currentNode.next;
      return;
    }

    // A -> B -> C -> D -> null
    while(currentNode.next !== null) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return;
      }
      // keep going
      currentNode = currentNode.next;
    }
    console.error(`Node with ${value} does not exist!`);
  }

  find(value) {
    let currentNode = this.head;
    if (currentNode === null) {
      console.error(`The list is empty!`);
    }

    while(currentNode.next !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    console.error(`Node with ${value} does not exist!`);
  }
}

function main() {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');

  SLL.remove('squirrel');


}

main();
