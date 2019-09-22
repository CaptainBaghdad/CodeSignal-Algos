function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let totalWeight = weight1 + weight2;
    if(weight1 > maxW && weight2 > maxW){
           return 0
       
       }
    
    if(totalWeight <= maxW){
        return value1 + value2;
       
       }
    
    if(weight1 <= maxW && value1 >= value2 || weight1 <= maxW && weight2 > maxW){
        
        return value1
       
       }
    
    
     if(weight2 <= maxW && value2 >= value1 || weight2 <= maxW && weight1 > maxW){
        
        return value2
       
       }
    
}
