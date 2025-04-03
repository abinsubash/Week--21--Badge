class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    let current = this.head;
    if (!this.head) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  removeDuplicate() {
    let newSet = new Set([]);
    let current = this.head;
    newSet.add(current.value);
    if (!current) return;
    while (current.next) {
      if (newSet.has(current.next.value)) {
        current.next = current.next.next;
      } else {
        newSet.add(current.value);
        current = current.next;
      }
    }
  }
  print() {
    let current = this.head;
    let value = "";
    while (current) {
      value += " " + current.value;
      current = current.next;
    }
    console.log(value);
  }
}
const list = new LinkedList();
list.append(23);
list.append(33);
list.append(23);
list.append(4);
list.append(88);
list.append(33);
list.removeDuplicate();
list.print();
