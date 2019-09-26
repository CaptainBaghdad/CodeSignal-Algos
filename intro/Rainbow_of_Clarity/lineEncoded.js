function lineEncoding(s) {
    
    let count = 0;
    let strSplit = s.split('')
    let newString = '';
    for(let i = 0; i < s.length;i++){
        if(s.charAt(i)  == s.charAt(i +1)){
            count++
           }
        
        else if(s.charAt(i)  !== s.charAt(i +1) ){
            count++
            if(count > 1) newString += `${count}`;
            
             newString += `${s.charAt(i)}`
             count = 0;
           }
        
    }
       return newString
   
}
