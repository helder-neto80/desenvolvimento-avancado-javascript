//promisses

const doSomeThingPromise = () => 
new Promise((resolve, reject) => {
    setTimeout(function(){
        //did something
        resolve('first data');
    }, 1500);
});

const doOtherThingPromise = () => 
new Promise((resolve, reject) => {
    setTimeout(function(){
        //did other thing
        resolve('second data');
    }, 1000);
});

Promise.race([doSomeThingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
});



// callbacks
function doSomething(callback) {
    setTimeout(function(){
        callback('first data');
    }, 1000);
}

function doOtherThing(callback){
    setTimeout(function(){
        callback('second data');
    }, 1000);
}

function doAll(){
    try{
    doSomething(function(data){
        var processedData = data.split('');
        try{

        doOtherThing(function(data2){
            var processedData2 = data2.split('');
            try{
            setTimeout(function(){
                console.log(processedData, processedData2);
            },1000);
        }catch(err) {
            //handle error
        }
        });
    } catch(err) {
        //handle error
    }
    });
}catch(err) {
    //handle error
}
}
doAll();