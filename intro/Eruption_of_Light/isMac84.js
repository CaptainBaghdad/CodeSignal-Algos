function isMAC48Address(inputString) {
    
    let reg = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
    let strSplit = inputString.split('-').join('')
    //console.log(`this is the split string ${strSplit}`)
    let matchArray = strSplit.match(reg);
    //console.log(matchArray.join(''))
        if(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(inputString)){
            return true;
        }else{
            return false;
        }
    }
    