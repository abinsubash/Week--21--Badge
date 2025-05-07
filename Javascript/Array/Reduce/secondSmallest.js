let arr = [123,44,2,55,6]
let [,res] = arr.reduce((acc,curr)=>{
    let [first,second] = acc
     if (curr < first) {
    return [curr, first];      
  } else if (curr < second && curr !== first) {
    return [first, curr];      
  }
  return acc;
},[Infinity, Infinity])
console.log(res)
 