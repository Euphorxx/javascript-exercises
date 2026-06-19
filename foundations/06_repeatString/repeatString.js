const repeatString = function(string,num) {
if (typeof(string) !== 'string' || num < 0) {return 'ERROR';
}
else {
    let arr = []
    for (let i = 0 ; i < num ; i++) {
        arr.push(string);
    }
    return arr.join('');
}

};

console.log(repeatString('hey', 3)) // returns 'heyheyhey'






// Do not edit below this line
module.exports = repeatString;
