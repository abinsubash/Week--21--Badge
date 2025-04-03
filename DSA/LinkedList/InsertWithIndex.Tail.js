class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    append(value){
        let current = this.head
        let node = new Node(value)
        if(!this.head){
            this.head = this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }
    print(){
        let value = ""
        let current = this.head
        while(current){
            value+="->" +current.value
            current = current.next
        }
        console.log(value)
    }
    deleteByValue(value){
        if(this.head.value==value){
            this.head = this.head.next
            if (!this.head) this.tail = null;
        return;
        }
        
    let current = this.head;
    while (current.next && current.next.value !== value) {
        current = current.next;
    }

    if (current.next) { 
        current.next = current.next.next;
        if (!current.next) this.tail = current; 
    }
    }
    InsertWithIndex(value,index){
           const node = new Node(value);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      if (!this.tail) this.tail = node;
      return;
    } 
    let current = this.head
    let count = 0
    while(current&&count<index -1){
        current = current.next
        count++
    }
    if (!current) {
      console.log("Index out of bounds");
      return;
    }
    
     node.next = current.next;
    current.next = node;

    if (!node.next) {
      this.tail = node;
    }
    
    }
}
const list = new LinkedList()
list.append(1)
list.append(12)
list.append(14)
list.append(15)
list.InsertWithIndex(33,2)

list.print()
