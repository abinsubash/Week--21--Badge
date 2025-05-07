let arr = [848,[44,66],33,55,22]
let arr2 = JSON.parse(JSON.stringify(arr))
arr[0]=444
arr[1][0]=9999
console.log(arr2)