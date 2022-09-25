function checkArray(arr){
    check1 = arr[0] + arr[1] + arr[2];
    check2 = arr[3] + arr[4] + arr[5];
    check3 = arr[6] + arr[7] + arr[8];
    check4 = arr[0] + arr[3] + arr[6];
    check5 = arr[1] + arr[4] + arr[7];
    check6 = arr[2] + arr[5] + arr[8];
    check7 = arr[0] + arr[4] + arr[8];
    check8 = arr[2] + arr[4] + arr[6];
    if(check1 ==15 && check2 ==15 && check3 ==15 && check4 ==15 && check5 ==15 && check6 ==15 && check7 ==15 && check8 ==15){
        console.log(true);
    }else{
        console.log(false)
    }
}

checkArray(arr = [3, 5, 7, 8, 1, 6, 4, 9, 2])
