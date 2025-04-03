function data(age){
    console.log(`my name is ${this.name} age is ${age}`)

}

const person = {
    name:"abin"
}

const res = data.bind(person,18)

res()