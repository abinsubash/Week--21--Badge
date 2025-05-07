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
    
    middleElement(){
        let mid = Math.floor(this.items.length/2)
        let newStack = []
        for(let i=0;i<this.items.length;i++){
            if(i==mid){
                continue
            }
            newStack.push(this.items[i])
        }
        return this.items = newStack
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
stack.middleElement()
stack.display()
