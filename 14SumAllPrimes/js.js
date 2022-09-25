
// a function for sum all Prime numbers
function sumPrimes(num) {
    if(num<2){
        console.log("your number should be more than 1")
    }else{
        var sum = 0;
        for (var i = 2; i <= num; i++){
            if (checkPrime(i)){
                sum += i;
            }
        }
        console.log(sum);
        }
    }
    

//a function for finding Prime number 
function checkPrime(i){
    for (var k = 2; k < i ; k++){
        if (i % k == 0){
            return false;
        }
    }   
    return true;
}

sumPrimes(977);
