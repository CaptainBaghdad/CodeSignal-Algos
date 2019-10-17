function rangeBitCount(a, b) {
    let rangeArray = []
    for(let i = a ; i <= b; i++ ){
        rangeArray.push(i)
        
    }
    
    let ans = rangeArray.map((ele) =>{
        return ele.toString(2)
    });
    
    return ans.join('').replace(/0/g, '').length

}
