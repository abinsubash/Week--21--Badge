class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size 
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameIndex = bucket.find((item)=>item[0]==key)
            if(sameIndex){
                sameKey[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameIndex = bucket.find((item)=>item[0]==key)
            if(sameIndex){
                return sameIndex[1]
            }
        }
        console.log('Key Doest not exist')
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
    }
    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameIndex = bucket.find(item=>item[0]==key)
            if(sameIndex){
                return bucket.splice(bucket.indexOf(sameIndex),1)
            }
        }
        console.log("noting is found to delete")
    }
    
}
const table = new hashTable(5)
table.set("name","abin")
table.set("mane","Subash")  
table.set("age",18)
table.remove('mane')
table.display()
console.log(table.get('name'))