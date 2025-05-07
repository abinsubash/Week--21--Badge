function MergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(left,right)
}
function merge(left,right){
    let sortArr = []
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sortArr.push(left.shift())
        }else{
            sortArr.push(right.shift())
        }
    }
    return [...sortArr,...left,...right]
}

console.log(MergeSort([133,4,55,3,66,1,77]))