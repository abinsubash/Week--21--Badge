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
    append(value){
        const node = new Node(value)
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
        let value = ''
        while(current){
            value +=" "+current.value
            current = current.next
        }
        console.log(value)
    }
    middle(){
        let slow = this.head
        let fast = this.head.next
        while(fast&&fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        console.log(slow.value)
    }
}

const list = new LinkedList()
list.append(12)
list.append(22)
list.append(4)
list.append(6)
list.append(55)
list.middle()
list.print()
