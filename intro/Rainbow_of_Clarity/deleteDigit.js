function deleteDigit(n) {
    let arr = n.toString().split('');
    let temp = 0;
    
    for(let  i = 0 ; i < arr.length;i++){
    let reg = new RegExp(arr[i])    
    let amount = parseInt(n.toString().replace(reg, ''))
        if(amount > temp){
            temp = amount
        }
    }
    return temp

}
