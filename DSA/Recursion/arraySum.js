function sum(arr,arrsum = 0){
    if(!arr.length){
        return arrsum
    }
    arrsum +=arr[arr.length-1]
    arr.pop()
    return sum(arr,arrsum)
}
console.log(sum([2,3,4,5,6,7]))