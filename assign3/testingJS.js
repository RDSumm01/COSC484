function regFunc(param){
    console.log("regFunc");
    param();
}

var anon = function(){
    console.log("anonFunc");
}

regFunc(anon);