function digitsProduct(product) {
    for(let i = 1; i < 10000;i++){
       if([... i.toString()].reduce((a,b) => a * b) == product ){
          console.log(`this is the value ${i}`)
          return i
          
          }
       
    }
    return -1
 }
 