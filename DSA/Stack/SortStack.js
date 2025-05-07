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
    sort(){
       let newStack = new Stack()
       while(!this.isEmpty()){
           let temp = this.pop()
           while(!newStack.isEmpty()&&newStack.peek()>temp){
               this.push(newStack.pop())
           }
           newStack.push(temp)
       }
       while(!newStack.isEmpty()){
           this.push(newStack.pop())
       }
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
stack.sort()
stack.display()


