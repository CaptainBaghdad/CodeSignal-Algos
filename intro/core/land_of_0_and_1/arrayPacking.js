function arrayPacking(a) {
    
    let arr = [];
    let eightBit = 8;
   
    let addZeros = 0;
    for(let i = 0; i < a.length; i++){
     temp = a[i].toString(2);
        arr.push(temp);
        
    }
    
    let ans = arr.map((ele)=>{
        addZeros = eightBit - ele.length;
        if(addZeros > 0){
            return '0'.repeat(addZeros) + ele
           
           }
        return ele
        
        
    })
    
   return parseInt(ans.reverse().join(''), 2)

}
