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
    removeMiddle(){
        let slow = this.head
        let fast = this.head.next
        let prev = null
        while(fast&&fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        if (prev) {
             prev.next = slow.next;
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
    
}
const list = new LinkedList()
list.append(23)
list.append(33)
list.append(4)
list.append(88)
list.append(33)
list.removeMiddle()
list.print()

