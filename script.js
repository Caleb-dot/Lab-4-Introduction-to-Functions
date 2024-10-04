function sum(num1, num2) {
    return num1 + num2;
}

function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(5, 8)); // 13

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6

function sum(num1, num2) {
    return num1 + num2;
}
let result = sum(5, 10);
console.log(result); // 15

function setLocalVar() {
    let localVar = "I am a local variable";
    return localVar;
}

console.log(setLocalVar()); 

function outerFunction() {
    let outerVar = "I am outside!";
    function innerFunction() {
        console.log(outerVar);
    }
    return innerFunction;
}

let myClosure = outerFunction(); // outerFunction has finished executing here
myClosure(); // Logs: "I am outside!"
