outerLoop:for(let i=0;i<2;i++){
    console.log('this is i',i)
    for(let j=0;j<5;j++){
        console.log('this is j',j)
        if(j==3){
            break outerLoop;
        }
    }
    
}