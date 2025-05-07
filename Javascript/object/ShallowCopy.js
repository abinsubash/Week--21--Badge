let obj ={
    name:'abin',
    age:18,
    address:{
        street:'kuttiyadi',
        po:'poothampara'
    }
}

let obj2 =Object.assign({},obj)
obj2.name =  'poodei'
obj2.address.po = 'nnulla'
console.log(obj2)
console.log(obj)