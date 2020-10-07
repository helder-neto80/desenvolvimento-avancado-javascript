var sumold = function(a,b){
    return a+b;
    
};
console.log(sumold(5,5));
//************************

function car(){
    this.foo = 'bar';
    }
    console.log(new car());
//**************************

var obj = {
    showcontext: function showcontext(){
        console.log(this);
    },
    log: function log(value){
        console.log(value);
    }
};
obj.showcontext();
//********************************

// Arrow functions
var sum = (a,b) => a+b;
console.log(sum(5,15));

var createObj = () => ({ test: 123 });
console.log(createObj());

//***********************************
function multiply (a,b) {
    b = typeof b === 'undefined'? 1: b;
    return a * b;
}

console.log(multiply(5,2));

//*******************************

function multiplyif (a,b){
    if (typeof b === 'undefined') {
        b = 1;
    } 
    return a * b;
}
console.log(multiplyif(5,3));

//*********************************

    function randomnumber(){
        return Math.random() * 10;
    }

    function multiplyrandom(a, b = randomnumber()){
        return a * b;
    }
    console.log(multiplyrandom(5));

   //***********************