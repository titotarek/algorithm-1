function myReplace(str, before, after) {
    let finalStr = "";
    finalStr = str.replace(before,after);
    return finalStr;
}


console.log(myReplace("A quick brown fox jumped over the lazy dog", "dog", "cat"));
