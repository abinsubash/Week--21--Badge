// if(NaN==NaN){
//     console.log(true)
// }else{
//     console.log(false)
// // }


// Label ==============================================
// outerLoop:for(let i =0;i<10;i++){
//     for(let j=0;j<20;j++){
//         if(j==10)break outerLoop
//     console.log(j)
//     }
// }


// Constructor function  ================================

// function Person(name,age){
//     this.name = name
//     this.age = age
// }
// let abin = new Person('abin',19)
// console.log(abin.name)
// console.log(abin.age)


// argument Object ==============================================

// function a (){
//     console.log(arguments)
// }
// a(233,44,55,66,7)

//Optional chaining

// const user = {
//     profile: {
//       name: 'Abin'
//     }
//   };
  
//   console.log(user.profile?.name);  
//   console.log(user.detils?.email)
//   console.log(user.details.email);    //  ( error)
  

// nullish operator =================================================
// let one = 0
// let another = 'abin'
// let value = one ?? another
// console.log(value)

// let data = one || another
// console.log(data)
// let data2 = undefined ?? another
// console.log(data2)