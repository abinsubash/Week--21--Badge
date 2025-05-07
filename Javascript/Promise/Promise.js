const myPromise = new Promise((resolve,reject)=>{
    let success = true
  setTimeout(()=>{
      if(success){
          resolve("this is resolved")
      }else{
          reject('this rejected')
      }
  },2000)
})
myPromise.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
});

