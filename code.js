/*// var n = 4;
var n = parseInt(readline())

var a = readline().split(" ")
// var a = "52 1 3 2".split(" ")
a=a.map(x => parseInt(x)) 
var b = []

for(var i=a.length-1;i>=0; i--)
    b+=" "+a[i];

b = b.trim()
// console.log(b);
print(b)*/

let numbers = [1,2,3];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);