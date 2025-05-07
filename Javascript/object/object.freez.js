
let obj={
    name:'abin',
    age:18,
    address:{
        po:'poothampara',
        street:'thottilpalam'
    }
}
Object.freeze(obj)
obj.clg='kpeshss'
console.log(obj)

// Prevents adding new properties.

// Prevents deleting existing properties.

// Prevents modifying existing properties.

// But only on the top level (not nested objects).