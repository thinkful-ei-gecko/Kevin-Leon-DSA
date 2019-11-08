class _Node {
  constructor(value, next, previous=null) {
    this.value = value, 
    this.next = next, 
    this.previous = previous;
  }
}

class CycleList {
  constructor() {
    let A = new _Node('A', null);
    let B = new _Node('B', null);
    let C = new _Node('C', null);
    let D = new _Node('D', null);
    let E = new _Node('E', null);
    let F = new _Node('F', null);
    this.head = A;
    A.next = B;
    B.next = C;
    C.next = D;
    D.next = E;
    E.next = F;
    F.next = A;
  }
}

class DoublyLinkedList {
  constructor() { 
    this.head = null;
    this.tail = null;
  }

  insertFirst(value) {
    let newNode = new _Node(value, this.head, null);
    if (this.head !== null) {
      this.head.previous = newNode;
    }
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
  }
    

  insertLast(value) {
    let currentNode = this.head;
    let newNode = new _Node(value, null, null);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    if (this.tail !== null) {
      newNode.previous = this.tail;
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  insertBefore(value, findValue) {
    let currNode = this.head;
    if (currNode === null) {
      console.error(`The list is empty!`);
      return;
    }
    while (currNode.next !== null) {
      if (currNode.next.value === findValue) {
        // found the stuff!11~
        currNode.next = new _Node(value, currNode.next, currNode);
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
        currNode.next = new _Node(value, currNode.next, currNode);
        return;
      }
      currNode = currNode.next;
    }
    console.error(`Node with ${findValue} does not exist!`);
  }

  insertAt(value, numPosition) {
    let currNode = this.head;
    if (numPosition === 0) {
      this.head = new _Node(value, currNode.next, null);
      this.tail = this.head;
      return;
    }
    let count = 1;
    while (currNode.next !== null) {
      if (count === numPosition) {
        currNode.next = new _Node(value, currNode.next, currNode);
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

    if (currentNode.value === value) {

      this.head = currentNode.next;
      currentNode.next.previous = null;
      if (currentNode.next.next === null) {
        this.tail = currentNode.next;
      }
      return;
    }
    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        if (currentNode.next.next !== null) {
          currentNode.next.next.previous = currentNode;
        }
        else {
          this.tail = currentNode;
        }
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

    while (currentNode.next !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    console.error(`Node with ${value} does not exist!`);
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
    let newNode = new _Node(value, null, this.tail);
    if(this.tail !== null){
        this.tail.next = newNode;
    }
    this.tail = newNode;
    if(this.head === null ){
        this.head = newNode;
    } 
  }
  insertBefore(value, findValue) {
    let currNode = this.head;
    if (currNode === null) {
      console.error(`The list is empty!`);
      return;
    }
    while (currNode.next !== null) {
      if (currNode.next.value === findValue) {
        // found the stuff!11~
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

    if (currentNode.value === value) {
      this.head = currentNode.next;
      return;
    }

    // A -> B -> C -> D -> null
    while (currentNode.next !== null) {
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

    while (currentNode.next !== null) {
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


function superiorDisplay(linkedList) {
  let currNode = linkedList.head;
  if (currNode === null) {
    console.error('List is empty!');
    return;
  }
  while (currNode.next !== null) {
    console.log(currNode.value);
    console.log(currNode.next);
    console.log(currNode.previous);
    console.log('---');
    currNode = currNode.next;
  }

  if (currNode.next === null) {
    console.log(currNode.value);
    console.log(currNode.next);
    console.log(currNode.previous);
    console.log('---');
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
    if (currNode.next.value === findValue) {
      // found the stuff!11~
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
// main();

//           n
// A -> B -> C -> B -> E -> F -> null
//      c
// A -> B -> C -> E -> F -> null
// removes duplicates O(n!) or O(n^2)
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
//           c
// A -> B -> C -> null
function reverseList(linkedList) {
  let currentNode = linkedList.head;
  let previousNode = null;
  let nextNode = linkedList.head.next;

  if (currentNode === null || currentNode.next === null) {
    console.error('nope');
    return;
  }

  while (currentNode !== null) {
    nextNode = currentNode.next; // store B
    currentNode.next = previousNode; // A -> null
    previousNode = currentNode; // A
    currentNode = nextNode; // move to B

    if (nextNode === null) {
      linkedList.head = previousNode;
    }
  }
  return linkedList;
}

function thirdFromEnd(ll) {
  let newLL = reverseList(ll);
  let count = 0;
  let currentNode = newLL.head;
  while (currentNode !== null) {
    if (count === 3) {
      return currentNode;
    }
    currentNode = currentNode.next;
    count++;
  }
  console.error('nope');
}

function middleOf(ll) {
  let _size = size(ll);
  if (_size % 2 > 0) {
    let mid = Math.floor(_size / 2);
    let count = 0;
    let currentNode = ll.head;
    while (currentNode !== null) {
      if (count === mid) {
        return currentNode;
      }
      currentNode = currentNode.next;
      count++;
    }
  }
  console.error('This list does not have a middle');

}

function main2() {
  let SLL = new LinkedList();
  // SLL.insertLast('Apollo');
  // SLL.insertLast('Boomer');
  // SLL.insertLast('Helo');
  // SLL.insertLast('Husker');
  // SLL.insertLast('Starbuck');
  SLL.insertLast('1');
  SLL.insertLast('2');
  SLL.insertLast('3');
  SLL.insertLast('4');
  SLL.insertLast('5');
  display(SLL);
  console.log('----');

  // WhatDoesThisProgramDo(SLL);
  // reverseList(SLL);
  // console.log(thirdFromEnd(SLL).value);

  // console.log(middleOf(SLL));

  // display(SLL);
  // console.log(JSON.stringify(SLL, null, 2));
}
// main2();


//checks if a linked list is TRUEly a cycle.
function cycleList(ll) {
  if (ll.head.next === null) {
    console.error('cannot check cycle of single element list');
    return false;
  }

  let slowNode = ll.head;
  let fastNode = ll.head;

  //A - B - C
  while (fastNode.next !== null && fastNode.next.next !== null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    if (slowNode.value === fastNode.value) {
      return true;
    }
  }
  console.error('did not find cycle');
  return false;
}
function main3() {
  let LL = new CycleList();
  // display(LL); //RoxXXx 
  console.log(cycleList(LL));


}
// main3();

function showAllPrevious(dll) {
  let currNode = dll.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function reverseDLL(dll) {
  let oldTail = dll.tail;
  let oldHead = dll.head;
  dll.tail = oldHead;
  dll.head = oldTail;
  let currNode = dll.head;
  while (currNode !== null) {
    let oldPrev = currNode.previous;
    let oldNext = currNode.next;
    currNode.previous = oldNext;
    currNode.next = oldPrev;
    currNode = currNode.next;
  }
}

function mainDLL() {
  let dll = new DoublyLinkedList();
  dll.insertFirst('Aquaria');
  //add the following items in your doubly linked list. 
  //`Aquaria, Caprica, Gemenon, Picon, Sagittaron`
          
  dll.insertLast('Caprica');
  dll.insertLast('Gemenon');
  dll.insertLast('Picon');
  dll.insertLast('Sagittaron');
  reverseDLL(dll);
  display(dll);
  superiorDisplay(dll);
}
mainDLL();