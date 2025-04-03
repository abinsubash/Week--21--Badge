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
        let value = ""
        while(current){
             value += " "+ current.value
            current = current.next
        }
        console.log(value)
    }
}

const list = new LinkedList()
list.append(12)
list.append(15)
list.append(144)
list.append(1)
list.print()