function Abin(name,age){
    this.name = name
    this.age = age
    this.greet = function greet(){
        console.log(this.name,this.age)
    }
}

const data1 = new Abin('Abin',18)
const data2 = new Abin('Abhisha',21)
data1.greet()
data2.greet()