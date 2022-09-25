
function game(n){
    number = n ;
    numberModulus = n%3 ;
    while(number!=1){
        if(numberModulus ==0){
            console.log(number , `0`) ;
            number = number/3 ;
            numberModulus = number%3 ;
        }else if(numberModulus == 1){
            console.log(number , "-1")
            number = (number -1)/3
            numberModulus = number%3 ;
        }else if(numberModulus == 2){ 
            console.log(number , "+1")
            number = (number+1)/3
            numberModulus = number%3 ;
        }
    }
    console.log(number);
}

game(99)
