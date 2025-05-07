let ws = new WeakMap()
let obj = {id:1}
ws.set(obj,'noting')
console.log(ws.get(obj))