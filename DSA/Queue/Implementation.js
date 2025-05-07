class Queue{
    constructor(){
        this.items = []
        this.rear = 0
        this.front = 0
    }
    enqueue(element){
        this.items[this.rear] = element
    }
}class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length ==0
    }
    display(){
        console.log(this.items)
    }
}

const queue = new Queue()
queue.enqueue(23)
queue.enqueue(4)
queue.enqueue(33)
queue.enqueue(55)
queue.display()