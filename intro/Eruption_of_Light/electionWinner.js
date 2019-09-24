function electionsWinners(votes, k) {
    let ogMax = Math.max.apply(null, votes);
    let count = 0;
    let sortedVotes = votes.sort((a,b)=>{
        return b - a
    });
    
    if(k == 0 &&  sortedVotes[1] != ogMax){
        count = 1
       
       }
    
   
    for(let i = 0 ; i < votes.length; i++){
        if(votes[i] + k > ogMax){
            count++
           
           }
        
        
    }
    
    return count;

}
