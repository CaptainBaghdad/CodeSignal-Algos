function longestDigitsPrefix(inputString) {
    if(inputString.match(/^[0-9]+/) == null){
        return  "";
       
       }
    
    return inputString.match(/^[0-9]+/).join('')

}
