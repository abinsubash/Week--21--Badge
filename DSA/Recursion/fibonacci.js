function fibonacci(num,arr=[0,1]){
    if(arr.length==num){
        return arr
    }
    arr.push((arr[arr.length-1]+arr[arr.length-2]))
    return fibonacci(num,arr)
}
console.log(fibonacci(5))