function sumUpNumbers(inputString) {
    let matchingNumbers = inputString.match(/(\d)+/g)
    if(matchingNumbers){
        return matchingNumbers.reduce((prev, curr) =>{
                return parseInt(prev) + parseInt(curr);
            
        }, 0)
       
       }
        
        return 0
}
