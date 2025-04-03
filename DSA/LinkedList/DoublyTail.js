class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList{
    constructor(value){
        this.head = null
        this.tail = null
    }
    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = this.tail = node
        }else{
          this.tail.next = node
          node.prev = this.tail
          this.tail = node
        }
    }
    print(){
        let current = this.head
        let value = ''
        while(current){
            value+=" "+current.value
            current = current.next
        }
        console.log("Front:",value)
         current = this.tail
        let reverse = ""
        while(current){
            reverse+=" "+current.value
            current = current.prev
        }
        console.log("Reverse",reverse)
        
    }
}

const list = new DoublyLinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.print()