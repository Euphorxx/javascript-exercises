const reverseString = function(string) {
arr = string.split('');
arr.reverse();
return arr.join('');
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
