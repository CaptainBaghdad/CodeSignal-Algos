function digitDegree(n) {
    let total = 1;
    let temp = 100;
    
    if(n <= 9 ){
        return 0
       
       }
    
    let numString = n.toString().split('');
     temp = numString.reduce((prev,curr)=>{
       return parseInt(prev) + parseInt(curr) 
    }, 0);
    
   
    
    function helper(val){
       return val.toString().split('')
        .reduce((prev,curr)=>{
       return parseInt(prev) + parseInt(curr) 
    }, 0);
    
        
    }
    
    
    while(temp > 9){
         total++
        temp = helper(temp)
       
          
          }
    return total

}
