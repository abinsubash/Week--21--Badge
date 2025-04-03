class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList{
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
            node.prev = current
        }
    }
    print(){
        let current = this.head;
    let value = "";
    let prev = null
    while (current) {
        value += " " + current.value;
        prev = current
        current = current.next;
    }
    current = prev
    console.log("Forward:",value)
    let reverse = "";
    while (current) {
        reverse += " " + current.value;
        current = current.prev;
    }
    console.log("Reverse:", reverse);
    }
}

const list = new DoublyLinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.print()