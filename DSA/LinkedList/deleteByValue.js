class Node {
    constructor(value){
        this.value = value 
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    append(value){
        let node = new Node(value)
        let current = this.head
        if(!this.head){
            this.head = node
        }else{
            while(current.next){
                current = current.next
            }
            current.next = node
        }
    }
    print(){
        let current = this.head
        let value = ""
        while(current){
            value+=" -> " +current.value
            current = current.next
        }
        console.log(value)
    }
    deleteValue(value){
        let current = this.head
        if(this.head.value ==value){
            this.head = this.head.next
        }else{
                while(current){
           if(current.next.value==value){
                current.next = current.next.next
           }
           current = current.next
        }
        }
    }
}
const list = new LinkedList()
list.append(12)
list.append(1)
list.append(3)
list.append(7)
list.append(4)
list.append(6)
list.append(7)
list.print()
list.deleteValue(7)
list.print()