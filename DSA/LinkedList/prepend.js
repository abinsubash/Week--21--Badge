class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
    prepend(value){
        let node = new Node(value)
          node.next = this.head;
          this.head = node;
    }
    print(){
        let current = this.head
        let value = ''
        while(current){
            value +=" "+current.value
            current = current.next
        }
        console.log(value)
    }
    
}

const list = new LinkedList()
list.prepend(12)
list.prepend(33)
list.prepend(5)
list.prepend(66)
list.print()

