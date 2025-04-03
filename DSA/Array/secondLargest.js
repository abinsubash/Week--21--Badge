let arr = [1,3,4,5,8,6,7,9]
let largest = 0
let secondLargest = 0
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest = largest
        largest = arr[i]
    }else if (arr[i]<largest&&secondLargest<arr[i]){
        secondLargest = arr[i]
    }
}

console.log(secondLargest)