let ws = new WeakSet()
let obj = {name:'abin'}
ws.add(obj)
console.log(ws.has(obj))