function data(age){
    console.log(`my name is ${this.name} age is ${age}`)

}
const person ={
    name:"abin"
}
data.apply(person,[18])