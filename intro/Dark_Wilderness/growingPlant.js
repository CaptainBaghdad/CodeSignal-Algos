function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let total = 0;
    let sum = 0;
    
       if(upSpeed > desiredHeight){
           return 1
       
       }

       while(sum  < desiredHeight){
          
           sum += upSpeed;
               total++;
              if(sum >= desiredHeight){
                     return total
                 
                 }
              sum -= downSpeed
       }
       
       return total
      
       
   }

   //growingPlant(100,10,910)