let arr = [2,3,44,55,66]
for(let i=0;i<Math.floor(arr.length/2);i++){
   [arr[i],arr[(arr.length-1)-i]] = [arr[(arr.length-1)-i],arr[i]]
}

console.log(arr)