function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let number = arr[i]
        let j = i-1
        while(j>=0&&arr[j]>number){
            arr[j+1] =arr[j]
            j--
        }
        arr[j+1]=number
    }
    return arr

}
let arr = [2,3,411,3,55,34,1]
console.log(insertionSort(arr))
