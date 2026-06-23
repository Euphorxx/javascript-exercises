const removeFromArray = function(arr,...args) { 
args.forEach((item) => {
    while(arr.includes(item)) {
        let index = arr.indexOf(item)
        arr.splice(index,1)
    }
})
return arr;
}


// Do not edit below this line
module.exports = removeFromArray;