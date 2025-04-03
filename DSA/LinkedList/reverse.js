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
    
    reverse(){
        let current = this.head
        let prev = null
        let next = null
        while(current){
            next = current.next
            current.next = prev
            prev = current 
            current = next
        }
        this.head = prev
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
list.print()
list.reverse()
list.print()


