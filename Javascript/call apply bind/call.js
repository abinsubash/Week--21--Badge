function data(age){
    console.log(`my name is ${this.name} age is ${age}`)
}
const person ={
    name:'abin'
}
data.call(person,18)