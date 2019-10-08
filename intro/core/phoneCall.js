function phoneCall(min1, min2_10, min11, s) {
    let total = 0;
    let min2Total = 0;
   
    let restOfMin = 0;
    
    if(min1 > s){
        return 0
       
       }
    
    while(s > 0){
        s = s - min1;
        total = 1;
        if( s > min2_10 && s > 9 * min2_10){
            min2Total = 9 * min2_10;
            s = s - min2Total;
            total += 9
            
           
            if(s > min11){
                restOfMin = s / min11;
                s = s - (restOfMin * min11);
                total += restOfMin
           
           }
           
           }
        
        else if(s > min2_10 && s < 9 * min2_10){
                
                min2Total = s / min2_10;
            
             total += min2Total
                s = s - (min2Total * min2_10);
               
            }
        
        
       
       }
    return Math.floor(total)
}
