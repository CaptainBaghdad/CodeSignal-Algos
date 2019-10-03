function messageFromBinaryCode(code) {
    let eightBits = code.match(/\d{8}/g)
    
    return eightBits.map((ele)=>{
        return String.fromCharCode(parseInt(ele,2))
        
    }).join('')

}
