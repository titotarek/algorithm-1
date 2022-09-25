

function TitleCase(string){
    let stringSplit = string.split(" ")

    for(let i = 0 ; i < stringSplit.length ; i++){
        stringSplit[i] = stringSplit[i][0].toUpperCase() + 
            stringSplit[i].slice(1).toLowerCase();
    }
    console.log(stringSplit.join(" "))
}   


TitleCase(string = "I'm a little tea pot")
