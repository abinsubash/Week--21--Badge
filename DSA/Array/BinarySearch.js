function binarySearch(arr,target,left=0,right=arr.length-1){
    let middle = Math.floor((left+right)/2)
    if(left>right){
        return -1
    }   
    if(arr[middle]==target){
        return true
    }
    if(target<arr[middle]){
        return binarySearch(arr,target,left,middle-1)
    }else{
        return binarySearch(arr,target,middle+1,right)
    }
    
}

console.log(binarySearch([1,3,4,5,6,7],8))