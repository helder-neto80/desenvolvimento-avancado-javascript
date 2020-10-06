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

