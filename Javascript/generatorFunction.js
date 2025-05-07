function* count(){
    for(let i=0;i<10;i++){
        console.log(i)
        yield
    }
 }
 let generator = count()
 generator.next()
 generator.next()
 generator.next()
 generator.next()
 generator.next()