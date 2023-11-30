// function display(some){
//     console.log(some)
// }

function calculate(a,b, callback){
    let result = a+b;
    if(callback) return callback(result);
}

calculate(5,6, function(value){
    console.log(value)
});