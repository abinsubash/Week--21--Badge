// Linked list appedn with tail
// class Node{
//     constructor(value){
//         this.value = value 
//         this.next = null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }
//     append(value){
//         const node = new Node(value)
//         if(this.head==null){
//             this.head=this.tail= node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//     }
//     print(){
//         let current = this.head
//         let res = ''
//         while(current){
//             res+='=>'+current.value
//             current= current.next
//         }
//         console.log(res)
//     }
// }
// const list = new linkedList()
// list.append(11)
// list.append(33)
// list.append(4)
// list.append(5)
// list.print()


//bubble sort ==========================
// function bubbleSort(arr){
//     let swapped 
//     do{
//         swapped = false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]<arr[i+1]){
//                 [arr[i],arr[i+1]]= [arr[i+1],arr[i]]
//                 swapped = true
//             }
//         }
//     }while(swapped)
//         return arr
// }

// console.log(bubbleSort([33,44,55,1,53,22,11,3]))

//insertion Sort=============================================

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let value = arr[i]
//         let j = i-1
//         while(j>=0&&arr[j]>value){
//             arr[j+1]= arr[j]
//             j--
//         }
//         arr[j+1] = value

//     }
//     return arr
// }
// console.log(insertionSort([22,33,11,55,3,5,7,2]))

// Selection Sort() ================================================
// function selectionSort(arr){

//     for(let i=0;i<arr.length;i++){
//         let lowest = i 
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[lowest]>arr[j]){
//                 lowest = j 
//             }
//         }
//         if(lowest !== i){
//             [arr[lowest],arr[i]] = [arr[i],arr[lowest]]
//         }
//     }
//     return arr
// }
// console.log(selectionSort([12,33,44,55,66,22,1,2,3]))


// Quick Sort ===========================================================
// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(pivot>arr[i]){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([12,33,44,55,66,123,1,2,3,4]))

// mergeSort =============================================================
// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     let sortArr=[]
//     while(left.length&&right.length){
//         if(left[0]>=right[0]){
//             sortArr.push(left.shift())
//         }else{
//             sortArr.push(right.shift())
//         }
//     }
//     return [...sortArr,...left,...right]
// }
// console.log(mergeSort([22,33,44,1,55,67,3,4,5]))

// Hash table ======================================================
// class HashTable{
//     constructor(size){
//         this.size = size
//         this.table = new Array(size)
//     }

//     hash(key){
//         let value = 0
//         for(let i=0;i<key.length;i++){
//             value+=key.charCodeAt(i)
//         }
//         return value%this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]] 
//         }else{
//            const sameItem =  bucket.find((item)=>item[0]===key)
//            if(sameItem){
//             sameItem[1] = value
//            }else{
//             bucket.push([key,value])
//            }
//         }
//     }
//     get(key){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameItem = bucket.find((item)=>item[0]===key)
//             if(sameItem){
//                 return sameItem[1]
//             }else{
//                 return console.log('not found')
//             }
//         }else{
//             return console.log('not found')
//         }
//     }
//     remove(key){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameItem = bucket.find((item)=>item[0]==key)
//             if(sameItem){
//                 bucket.splice(bucket.indexOf(sameItem),1)
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table = new HashTable(50)
// table.set("name","abin")
// table.set("mane","Subash")  
// table.set("age",18)
// table.remove('mane')
// table.display()


// event delegation===============================================

// let parent = document.getElementById('parent')
// parent.addEventListener('click',(e)=>{
//  console.log(e.target.dataset)
// })

//Event capturing ==============================================

// let child1 = document.getElementById('child1').addEventListener('click',(e)=>{
//     console.log('child1 clicked')
// },true)
// let child2 = document.getElementById('child2').addEventListener('click',(e)=>{
//     console.log('child1 clicked')
// },true)
// let child3 = document.getElementById('child3').addEventListener('click',(e)=>{
//     console.log('child3 clicked')
// },true)
// let parent = document.getElementById('parent').addEventListener('click',(e)=>{
//     console.log('parent clicked')
// },true)

//Event bubbling (default) ===================================================

// let child1 = document.getElementById('child1').addEventListener('click',(e)=>{
//         console.log('child1 clicked')
//     },false)
//     let child2 = document.getElementById('child2').addEventListener('click',(e)=>{
//         console.log('child1 clicked')
//     },false)
//     let child3 = document.getElementById('child3').addEventListener('click',(e)=>{
//         console.log('child3 clicked')
//     },false)
//     let parent = document.getElementById('parent').addEventListener('click',(e)=>{
//         console.log('parent clicked')
//     },false)


// Event Debouncing========================================================
// function Debouncing(fn,delay){
// let timeOut 
// return function (...args){
//     clearTimeout(timer)
//     timeOut = setTimeout(()=>fn.apply(this,args),delay)
// }
// }
// const handleDebouncing = Debouncing((e)=>{
//     console.log(e.target.value)
// },500)
// document.getElementById('input').addEventListener('change',handleDebouncing)


// Event throttling ======================================================
// function throttling(fn,limit){
//     let isThrottling = false
//     return function(...args){
//         if(!isThrottling){
//             fn.apply(this,args)
//             isThrottling = true
//             setTimeout(()=>{
//                 isThrottling = false
//             },limit)
//         }
//     }
// }
// function handleClick(){
//     console.log('target',new Date().toLocaleString())
// }
// const throttilClick = throttling(handleClick,3000)
// document.getElementById('btnClick').addEventListener('click',throttilClick)


// Prototype (Map)================================================================

// Array.prototype.abin = function(cb){
//     let result = []
//     for(let i=0;i<this.length;i++){
//         result.push(cb(this[i],i,this))
//     }
//     return result
// }
// let arr = [1,3,4,5,6]
// console.log(arr.abin((value)=>value*2))

// Prototype (Reduce) ============================================================

// Array.prototype.abin = function(cb,inital){
//     let acc = inital||0
//     for(let i=0;i<this.length;i++){
//          acc = cb(acc,this[i],i,this)
//     }
//     return acc
// }

// let arr=[1,2,4,5,6]
// console.log(arr.abin((acc,cur)=>acc+cur,""))