// function expression called divide. It divides 2000 by 100.
let divide = function() {
    return 2000 / 100
}
console.log(divide()); // invoke divide.

// square arrow function takes one parameter and multiplies it times itself
square = num => num * num;
console.log(square(2));

// add arrow function takes two parameters and adds them together
add = (num1, num2) => num1 + num2;
console.log(add(2, 3));
