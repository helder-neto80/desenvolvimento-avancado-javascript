function sum(a,b){
    var value = 0;

    for( var i = 0; i < arguments.length; i++ ){
        value += arguments[i];
    }

    return value;
}

console.log(sum(5,5,5,2,3));