function differentSquares(matrix) {
    let arr = [];
    ;
        for(let  i = 0 ; i < matrix.length -1; i++){
            for(let j = 0 ; j < matrix[i].length -1; j++){
                let str = "" + matrix[i][j] + matrix[i][j +1] + matrix[i + 1][j] + matrix[i + 1][j +1]
                if(!arr.includes(str)){
                    arr.push(str)
                   
                   }
            }
            
        }
        return arr.length
        
        
    }
    