function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let lowest = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[lowest]>arr[j]){
                lowest = j
            }
        }
        if(lowest!==i){
            [arr[lowest],arr[i]] = [arr[i],arr[lowest]]
        }
    }
    return arr
}
console.log(selectionSort([22,3,55,1,66,4]))