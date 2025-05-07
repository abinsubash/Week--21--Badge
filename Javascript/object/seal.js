let obj={
    name:'abin',
    age:18,
    address:{
        po:'poothampara',
        street:'thottilpalam'
    }
}
Object.seal(obj)
obj.name='abhisha'
console.log(obj)


// ✅ You can modify existing properties.

// ❌ You cannot add new properties.

// ❌ You cannot delete existing properties