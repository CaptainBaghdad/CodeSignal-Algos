function buildPalindrome(st) {
    
    let newstr = '';
 
   
    if(st == st.split('').reverse().join('')){
        return st       
       }
     
    for(let i = 0; i < st.length; i++){
        if(`${st}${newstr}` == `${st}${newstr}`.split('').reverse().join('')){
           return `${st}${newstr}`;
           }
        
        newstr = `${st.charAt(i)}${newstr}`
        
    }
    
   
    return `${st}${newstr}`
    

}
