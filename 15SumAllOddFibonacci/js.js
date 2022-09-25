//creat function for calculate all 
function sumFibs(num) {


    let fibonacciArray = [];

    //creat our fibonacci array
    for(let i=0; i<num ;i++){
        if(i<2){
            fibonacciArray[i]=i
        }else{
            fibonacciArray[i]= fibonacciArray[i-1]+fibonacciArray[i-2];
        }
    }//end of creat our fibonacci array


    let sumOddFibonacci = 0 ;
    let sumEvenFibonacci = 0 ;

    //for search in fibonacci array
    for(let j = 0 ; j < fibonacciArray.length ; j++){

        //find ood number
        if(fibonacciArray[j]%2 === 1){
            sumOddFibonacci += fibonacciArray[j]
        }

        //find even number 
        if(fibonacciArray[j]%2 === 0){
            sumEvenFibonacci += fibonacciArray[j]
        }
    }

    console.log("Sum All Odd Fibonacci is = ",sumOddFibonacci , " Sum All Even Fibonacci is = " , sumEvenFibonacci);
}


//enter our number 
sumFibs(28);
