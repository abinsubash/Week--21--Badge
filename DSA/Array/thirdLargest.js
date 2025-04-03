let arr = [1,3,4,5,8,6,7,9,10]
let largest = 0
let secondLargest = 0
let thirdLargest = 0
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        thirdLargest = secondLargest
        secondLargest = largest
        largest = arr[i]
    }else if (arr[i]<largest&&secondLargest<arr[i]){
        secondLargest = arr[i]
    }else if(arr[i]<largest&&secondLargest>arr[i]&&thirdLargest<arr[i]){
        thirdLargest = arr[i]
    }
}

console.log(thirdLargest)