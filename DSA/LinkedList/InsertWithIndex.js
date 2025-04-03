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
    insertByIndex(value,index){
        let node = new Node(value)
        let current = this.head
        if(index==0){
            node.next = this.head
            this.head = node
            return
        }
        let count = 0
        while(current.next&&count<index-1){
            current = current.next
            count++;
        }
        node.next = current.next;
        current.next = node
    }
}

const list = new LinkedList()
list.append(12)
list.append(22)
list.append(4)
list.append(55)
list.print()
list.insertByIndex(23,1)
list.print()