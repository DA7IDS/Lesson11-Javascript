// 1
let cars = ["audi", "bmw", "lexus", "volkswagen", "porsche"];


for (let i = 1; i < 5; i++) {
    console.log(cars[i]);
}
// 2
let names = ["gio", "nika", "mari", "nia", "mate"]

for (let z = 0; z < names.length; z++) {
    if (names[z].length > 3)
        console.log(names[z]);
}
// 3
let numbers = [7, 9, 8, 15, 27, 13, 4, 6, 12]

for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] % 2 == 1)
        console.log(numbers[n])
}
for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] % 2 == 0)
        console.log(numbers[n])
}
// 4
let car = ["audi", "bmw", "lexus", "volkswagen", " porsche"];

console.log(car[1]);
// 5
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
};
console.log(person.eyecolor);
// 6
var every = [7, 8, 9, 10]

console.log(every[0])
console.log(every[1])
console.log(every[2])
console.log(every[3])
    //  7

let numb = [5, 25, 89, 120, 36];

numb.push('javascript', 'python');
numb.unshift('html', 'css');
console.log(numb);
console.log(numb.length);
numb.shift();
numb.pop();
console.log(numb);
// 8

let fruits = ['fortoxali', 'banani', 'msxali'];

console.log(fruits.length);
fruits.push('vashli', 'ananasi');
fruits.unshift('sazamtro');
console.log(fruits.length);
fruits.splice(2, 0, 'mango');
fruits.shift();
fruits.pop();
console.log(fruits.length);

// 9
let newcars = ["audi", "bmw", "lexus", "volkswagen", "ferrari", "porsche", "bentley"];

for (let c = 2; c < 6; c++) {
    console.log(newcars[c])
}

let array = newcars.slice(1, 4);
console.log(array)