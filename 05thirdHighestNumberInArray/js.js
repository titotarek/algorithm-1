array = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
array2 = []
function replace(arr){
    for(let i =0 ; i < 2 ; i++){
        arr = arr.slice(); //copy the array
        arr.splice( arr.indexOf(Math.max.apply(null, arr)),1) 
        }
    array2 = arr;
    return Math.max(...array2)
}

console.log(replace(array))
