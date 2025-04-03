
let arr = [1,3,4,5,8,6,7,9]
let smallest = Infinity
let secondSmallest = Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest){
        secondSmallest = smallest
        smallest = arr[i]
    }else if (arr[i]>smallest&&secondSmallest>arr[i]){
        secondSmallest = arr[i]
    }
}

console.log(secondSmallest)