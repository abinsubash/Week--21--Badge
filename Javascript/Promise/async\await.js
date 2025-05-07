const myPromise = new Promise((resolve,reject)=>{
    let flag= true
    setTimeout(()=>{
        if(flag){
            resolve('resolved')
        }else{
            rejected('rejected')
        }
    },2000)
})
async function managePromise(){
    try{
        
    let result = await myPromise
    console.log(result)
    }catch(error){
        console.log(error)
    }
}

managePromise()