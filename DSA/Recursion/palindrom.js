function palindrom(str){
    if(str.length<2){
        return true
    }
    if(str[0]!=str[str.length-1]){
        return false
    }
    
    str = str.slice(1,(str.length-1))
    return palindrom(str)
}
console.log(palindrom('malayalamm'))