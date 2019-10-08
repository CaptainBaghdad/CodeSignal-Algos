function lateRide(n) {
    let eachHr = 60;
    let hrs = Math.floor(n / eachHr);
    let mins = n % eachHr;
    console.log(`This is the hrs ${hrs} and this is the minutes ${mins}`)
    let str = "" + hrs + mins;
    return str.split('').reduce((prev, curr)=>{
        return parseInt(prev) + parseInt(curr)
        
    }, 0)

}
