function factorial(value,sum=1,current=1){
    if(current==value+1){
        console.log(sum)
        return sum
    }
    sum=sum*current
    return factorial(value,sum,current+1)
}
console.log(factorial(5))