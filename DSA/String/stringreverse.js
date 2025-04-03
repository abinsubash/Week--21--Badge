
let str = 'abin subash'
let res = ''
let word = ''
for(let i=0;i<str.length;i++){
    if(str[i]==" "|| i==str.length-1){
        word+=" "
      for(let j=word.length-1;j>= 0 ;j--){
          res+=word[j]
      }
      word = ''
    }
    word+=str[i]
}
console.log(res)