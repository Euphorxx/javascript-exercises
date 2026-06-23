const sumAll = function(a,b) {
let nums = [];
let num1;
let num2;
if(!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
else if (a < 0 || b < 0) return 'ERROR';

if (a > b) num1 = b, num2 = a;
else if (b > a) num1 = a, num2 = b;

for(let i = num1 ; i <= num2 ; i++) {
nums.push(i);
}
return nums.reduce((acc,curr) => acc + curr)
};


// Do not edit below this line
module.exports = sumAll;
