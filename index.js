
// code your solution here
/* just uses a loop doesnt use find the way the lab wanted */

function superbowlWins(Array){ 
    for (let i=0 ; i < Array.length; i++) {
        if (Array[i].result === "W"){
             return Array[i].year
        } 
    }
    return undefined
}


function isWin(element){
    return element.result === 'W'
}

function superbowlWin(array){
    let out = array.find(isWin)  // Is there a way for me to output something other than the first element 
    return out ? out.year : undefined;
    //if (out === undefined){
    //    return out}
    //return out.year
}


const record = [
    { year: "2015", result: "L"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "W"}, ]

console.log(superbowlWin(record))

