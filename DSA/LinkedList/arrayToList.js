class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    append(value){
        let current = this.head
        let node = new Node(value)
        if(!this.head){
            this.head = this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }
    print(){
        let value = ""
        let current = this.head
        while(current){
            value+="->" +current.value
            current = current.next
        }
        console.log(value)
    }
    deleteByValue(value){
        if(this.head.value==value){
            this.head = this.head.next
            if (!this.head) this.tail = null;
        return;
        }
        
    let current = this.head;
    while (current.next && current.next.value !== value) {
        current = current.next;
    }

    if (current.next) { 
        current.next = current.next.next;
        if (!current.next) this.tail = current; 
    }
    }
    
    arrayToList(arr){
        for(let i=0;i<arr.length;i++){
            this.append(arr[i])
        }
    }
}
const list = new LinkedList()
list.append(1)
list.append(12)
list.append(14)
list.append(15)
list.arrayToList([23,55,6,7])
list.print()