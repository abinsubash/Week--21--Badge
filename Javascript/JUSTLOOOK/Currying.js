function currying(a){
    return function(b){
        return function(c){
            return function(d){
            return a+b+c+d
            }
        }
    }
}
console.log(currying(12)(33)(44)(55))