//  1. Addition

let a = [];

for(let i=200 ; i<=2700 ; i++){
    if(i%3 === 0 || i%5 === 0){
        a.push(i)
    }if(i%3 === 0 && i%5 === 0){
        a.pop(i)
    }
}

console.log(a)


//  2. Shift the Values

let b = [2 , 1 , 6 , 4 , -7];
let c = []
for(let i=0 ; i<b.length ; i++){
    if(b.length>c.length){
        c[i+1] = b[i];
    }else{
        c[0] = b[i];
    }
}

console.log(c)

//  3. FizzBuzz


let d = [];

for(let i=1 ; i<=135 ; i++){
    d.push(i);
    if(i%3==0 && i%5==0){
        d[i-1] = 'FizzBuzz';
    }else if(i%5==0){
        d[i-1] = 'Buzz'
    }else if(i%3==0){
        d[i-1] = 'Fizz'
    }
}

console.log(d)


// 4. Fibonacci

let e = [];

for(let i=0; i<36;i++){
    if(i<2){
        e[i]=i
    }else{
        e[i]=e[i-1]+e[i-2];
    }
}

console.log(e);


//  5. Remove the Negative

let f = [2 , 1 , 6 , 4 , -7];

for(let i = 0 ; i<f.length ; i++){
    if(f[i]<0){
        f.pop(i)
    }
}

console.log(f)


// 6. Communist Censorship 


let g = ['Man', 'I','Love','The','Matrix','Program'];
const newArray = []
let star = '';

function changeWithStar(str){
    for(let i=0 ; i<g.length ; i++){
        if (g[i] === str) {
            for(let j=0 ; j<g[i].length; j++){
                star+='*'
            }
            newArray.push(star);
        } else{
            newArray.push(g[i])
        }
    
    }
}

changeWithStar("Love")
console.log(newArray)


