

function sumAll(arr) {
    let sum =0 ;
    
    if(arr[0]<arr[1]){
        for(let i = arr[0] ; i <= arr[1]; i++){
            sum += i
        }
        console.log(sum)
    }else if(arr[0]>arr[1]){
        for(let i = arr[1] ; i <= arr[0]; i++){
            sum += i
        }
        console.log(sum)
    }else{
        console.log(arr[0]+arr[1])
    }
    
}


sumAll(arr = [-3,3]);
