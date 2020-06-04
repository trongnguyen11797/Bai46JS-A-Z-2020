// write a function count form 1 -> b
// return a promise
var promise = require('promise');

function test(a, b){
    a();
    return new Promise(function(reslove) {
        let x = setInterval(() => {
            if(b === 5){
                clearInterval(x);
                reslove();
            }
            console.log(b++);
        }, 1000)
    })
}
function done() {;
    console.log('Running...');
}

test(done, 1).then(function() {
    console.log('Done');
})
