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
        if(!this.head){
            this.head = node
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
    }
    sort(){
        let swapped 
        do{
            let current = this.head
            swapped = false
            while(current.next){
                if(current&&current.next.value<current.value){
                    
                let temp = current.value
                current.value = current.next.value
                current.next.value = temp
                swapped = true
                }
            }
            current = current.next
                
        }while(swapped)
    }
    print(){
        let value = ""
        let current = this.head
        while(current){
            value+=" "+current.value
            current = current.next
        }
        console.log(value)
    }
}

const list = new LinkedList()
list.append(2)
list.append(4)
list.append(55)
list.append(6)
list.append(9)
list.print()
list.sort()
list.print()