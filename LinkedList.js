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
  }

  insertBefore(value, findValue) {
    let currNode = this.head;
    if (currNode === null) {
      console.error(`The list is empty!`);
      return;
    }
    while (currNode.next !== null) {
      if (currNode.next.value === findValue) { // found the stuff!11~
        currNode.next = new _Node(value, currNode.next);
        return;
      }
      currNode = currNode.next;
    }
    console.error(`Node with ${findValue} does not exist!`);
  }

  insertAfter(value, findValue) {
    let currNode = this.head;
    if (currNode === null) {
      console.error(`The list is empty!`);
      return;
    }

    while (currNode.next !== null) {
      if (currNode.value === findValue) {
        currNode.next = new _Node(value, currNode.next);
        return;
      }
      currNode = currNode.next;
    }
    console.error(`Node with ${findValue} does not exist!`);
  }

  insertAt(value, numPosition) {
    let currNode = this.head;
    if (numPosition === 0) {
      this.head = new _Node(value, currNode.next);
      return;
    }
    let count = 1;
    while (currNode.next !== null) {
      if (count === numPosition) {
        currNode.next = new _Node(value, currNode.next);
        return;
      }
      currNode = currNode.next;
      count++;
    }
    console.error(`Node with position of ${numPosition} does not exist!`);
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

function display(linkedList) {
  let currNode = linkedList.head;
  if (currNode === null) {
    console.error('List is empty!');
    return;
  }

  while (currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }

  if (currNode.next === null) {
    console.log(currNode.value);
  }
}

function size(linkedList) {
  let count = 1;
  let currNode = linkedList.head;
  if (currNode === null) {
    console.error('List is empty!');
    return;
  }
  if (currNode.next === null) {
    return count;
  }

  while (currNode.next !== null) {
    count++;
    currNode = currNode.next;
  }

  return count;
}

function isEmpty(linkedList) {
  if (linkedList.head === null) {
    return true;
  }
  return false;
}

function findPrevious(linkedList, findValue) {
  let currNode = linkedList.head;
  if (currNode === null) {
    console.error(`The list is empty!`);
    return;
  }

  if (currNode.value === findValue) {
    console.log('No previous node for 1-item linked list');
    return;
  }

  while (currNode.next !== null) {
    if (currNode.next.value === findValue) { // found the stuff!11~
      return currNode;
    }
    currNode = currNode.next;
  }
  console.error(`Node with ${findValue} does not exist!`);
}

function findLast(linkedList) {
  let currNode = linkedList.head;
  if (currNode === null) {
    console.error(`The list is empty!`);
    return;
  }

  while (currNode.next !== null) {
    if (currNode.next.next === null) {
      return currNode.next;
    }
    currNode = currNode.next;
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

  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);

  SLL.remove('Tauhida');

  display(SLL);
  console.log(size(SLL));
  console.log(isEmpty(SLL));
  console.log('findPrevious: ', findPrevious(SLL, 'Husker'));
  console.log('findLast', findLast(SLL));

  let newLL = new LinkedList();
  // newLL.insertBefore('haha','xxx');
  // newLL.insertLast('test');
  // newLL.insertLast('testa');
  // console.log(size(newLL));
  console.log(isEmpty(newLL));

  // console.log(JSON.stringify(SLL, null, 2));
}

main();
