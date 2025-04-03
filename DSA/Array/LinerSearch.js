function LinerSearch(arr,value){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value) return true
    }
    return false
}

console.log(LinerSearch([1,3,4,5,6],55))