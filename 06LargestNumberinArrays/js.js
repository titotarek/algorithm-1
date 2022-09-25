// the first way with sort() method:

function findMax(x){
    let result = [] ;
    for(let i = 0 ; i<x.length ; i++){
        sort = x[i].sort(function(a,b){return a - b});
        result.push(sort[sort.length-1])
    }
    console.log(result);
}

// the second way with Math.max.apply() method:

/*
function findMax(x){    
    let maxTotal = [];
    for(let i = 0 ; i<x.length ; i++){
        max = Math.max.apply(null,x[i])
        maxTotal.push(max);
    }
    console.log(maxTotal);
}
*/

let array = [[40, 5, 1, 3],[20,10,22,19,50], [113, 27, 118, 26], [32, 335, 37, 39], [100, 1001, 8555, 1]];
findMax(array);
