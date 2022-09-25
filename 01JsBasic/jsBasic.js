
// 1. Print 1-135

for(let i=1 ; i<=135 ; i++ ){
    console.log(i)
}



// 2. Print Odd Numbers 1 - 135

let j=0;

for(let i=1 ; i<=135 ; i++ ){
    if(i%2===1){
        j=i;
        console.log(j)
    }
}


//  3. Sum of Printed Numbers

let sum = 0 ;
for(let i=1 ; i<=135 ; i++){
    sum += i ;
    console.log(`number is: ${i} | sum: ${sum}`);
}

// 4. Print the elements of an array

let x = [1,4,2,12];

for(let i = 0 ; i < x.length ; i++){
    console.log(x[i])
}

//  5. Find Max&Min

let y = [100, 400 , 2 , -1 , 30 , 35 ,22];
let max = [0];
let min = [0];

for(let i=0 ; i < y.length ; i++){
    if(y[i]>max){
        max=y[i];
    }if(y[i]<min){
        min=y[i]; 
    }
}

console.log(max);
console.log(min);

//  6. Get Average

let sum2 = 0 ;
let Average = 0;
let z =[100 , 200 , 10 , 5 , 37 , 9 , -5 , 43];

for(let i=0 ; i<z.length ; i++){
    sum2 += z[i] ;
}
Average = sum2 / z.length ;
console.log(Average);

// 7. Eliminate the Negatives

let a = [10 , -4 , 3 , -2 , 2 , 10]
for (let i = 0 ; i < a.length ; i++){
    if(a[i] < 0){
        a[i] = 0 ;
    }
}

console.log(a)


//  8. Number to String

let b = [10 , -4 , 3 , -2 , 2 , 10]
for (let i = 0 ; i < b.length ; i++){
    if(b[i] < 0){
        b[i] = " changed " ;
    }
}

console.log(b) 