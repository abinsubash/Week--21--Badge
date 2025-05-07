class Stack {
    constructor(){
        this.items=[]
    }
    push(element){
        return this.items.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return console.log('noting exist')
        }
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty()){
            return console.log('stack is empty')
        }
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length==0
    }
    display(){
        return console.log(this.items)
    }

}

const stack = new Stack()
stack.push(223)
stack.push(33)
stack.push(44)
stack.push(5)
stack.push(22)
stack.push(3)
stack.display()
stack.pop()
console.log(stack.peek())
stack.display()
