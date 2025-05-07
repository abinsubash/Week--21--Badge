let arr = [1,33,55,2,11,5,0]

function BubbleSort(arr){
    let swapped 
    do{
        swapped = false
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true
            }
        }
    }while(swapped)
    return arr
}

console.log(BubbleSort(arr))