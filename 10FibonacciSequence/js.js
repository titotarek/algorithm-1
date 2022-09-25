
$("#button").click(function(){
    let e = [];
    n = $("#input").val()
    for(let i=0; i<1000 ;i++){
        if(i<2){
            e[i]=i
        }else{
            e[i]=e[i-1]+e[i-2];
        }
    }
    fibb = e[n]
    
    $("#result").text(fibb); 
})

//fibonacci()
