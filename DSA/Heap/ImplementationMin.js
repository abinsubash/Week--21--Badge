class Heap {
    constructor(){
        this.item = []
    }
    insert(value){
        this.item.push(value)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.item.length-1
        let element = this.item[idx]
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2)
            let parent = this.item[parentIdx]
            if(element>=parent)break
            [this.item[idx],this.item[parentIdx]]= [this.item[parentIdx],this.item[idx]]
            idx = parentIdx
        }
    }
    remove(){
        if(this.item.length==0) return null
        let max = this.item[0]
        let end = this.item.pop()
        if(this.item.length>0){
            this.item[0] = end
            this.bubbleDown()
        }
        return max
    }
    bubbleDown(){
        let idx = 0
        let length = this.item.length
        let element = this.item[idx]
        while(true){
            let leftChild, rightChild
            let swapped = null
            let leftChildIdx = 2*idx+1
            let rightChildIdx= 2*idx+2
            if(leftChildIdx<length){
                leftChild = this.item[leftChildIdx]
                if(leftChild>element){
                    swapped = leftChildIdx
                }
            }
            if(rightChildIdx<length){
                rightChild = this.item[rightChildIdx]
                if(swapped!==null&& rightChild>leftChild||swapped==null&&rightChild>element){
                    swapped =rightChildIdx
                }
            }
            if(swapped ==null)break
            this.item[idx] = this.item[swapped]
            this.item[swapped] = element
            idx = swapped

        }
    }
    display(){
        console.log(this.item)
    }
}
const heap = new Heap();
heap.insert(77);
heap.insert(66);
heap.insert(55);
heap.insert(12);
console.log(heap.remove())
heap.display();