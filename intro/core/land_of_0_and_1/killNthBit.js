function killKthBit(n, k) {
    let numToBinary = n.toString(2);
      let kPlus  = k + 1;
    let newString = '';
    //console.log(numToBinary, typeof numToBinary)
    
      let s1 = numToBinary.substring(0, k);
      let s2 = numToBinary.substring(kPlus);
      let ans  = s1 + '0' + s2;
      //console.log(parseInt(ans, 2))
      
      return n & ~(1 << (k - 1));
    
  }
  