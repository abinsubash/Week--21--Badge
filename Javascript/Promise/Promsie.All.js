const p1 = new Promise((res,rej)=>res('res'))
const p2 = new Promise((res,rej)=>rej('rej'))
const p3 = new Promise((res,rej)=>res('res'))
Promise.all([p1,p2,p3]).then((results)=>{
    console.log('allresloved',results)
}).catch((error)=>{
    console.log(error)
})