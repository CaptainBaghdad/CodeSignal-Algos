function isBeautifulString(inputString) {
    var abc = new Array(26).fill(0)
    //console.log(abc)
     for(var i = 0;i < inputString.length;i++){
         abc[parseInt(inputString.charCodeAt(i) - 97)]++;
     }
     var t = inputString.length + 1;
     for(var i = 0;i < abc.length;i++){
         if(t < abc[i])
             return false;
         else
             t = abc[i];
     }
     return true;
     }
 