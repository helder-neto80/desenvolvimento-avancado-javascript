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
    doSomething(function(data){
        var processedData = data.split('');

        doOtherThing(function(data2){
            var processedData2 = data2.split('');
            
            setTimeout(function(){
                console.log(processedData, processedData2);
            },1000);
        });
    });
}
doAll();