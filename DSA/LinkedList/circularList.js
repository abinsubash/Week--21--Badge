class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class circularList{
    constructor(){
        this.head = null
        this.tail = null
    }
    append(value){
        const node = new Node(value)
        if(!this.head){
           this.head = this.tail = node
           node.next = this.head
        }else{
            this.tail.next = node
            node.next = this.head; 
            this.tail = node;
        }
    }
    print(){
            let current = this.head
            let result = "";
        do{
            result += current.value + " -> ";
            current = current.next;
        }while(current !== this.head)
        console.log(result)
    }
}

const list = new circularList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.print()