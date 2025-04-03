function factory(name,age){
    return {
        name:name,
        age:age,
        greet(){
            console.log(`my name is ${this.name} age is ${this.age}`)
        }
    }
}

const profile = factory('abin',18)

console.log(profile)
profile.greet()