// 1. Create an arrow function called square that takes a number as an argument and returns its square. Use the arrow function to calculate the square of a given number and display the result. 
var square=5;
var square1=(square) =>
{
    return square*square;
}
console.log(square1(square));


// 2. The following is an array of 10 students ages: => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24E Sort the array and find the min and max ageG Find the median age(one middle item or two middle items divided by two Find the average age(all items divided by number of items Find the range of the ages(max minus min Compare the value of (min - average) and (max - average), use abs() method 
var a=[19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
a=a.sort();
console.log(a[0],a[9]);
console.log((a[4]+a[5])/2);
var sum=0;
for(var i=0;i<10;i++)
{
    sum+=a[i];
}
var avg=Math.ceil(sum/10);
console.log(avg);
console.log(a[9]-a[0]);
min=Math.abs(a[0]-avg)
max=Math.abs(a[9]-avg)
console.log(min,max);





// 3. Create a Map to store contact information (name, age, email, location) and implement a function to retrieve contact details by name. 

let mymap=new Map();
mymap.set("vaishnavi",
    {
        age:20,
        email:"............@gmail.com,",
        location:"Hyderabad",
    }
)
mymap.set("vaishnavi2",
    {
        age:22,
        email:"....2222222@gmail.com,",
        location:"Hyderabad22",
    }
)
mymap.set("vaishnavi1" ,{
        age:21,
        email:"....1111111@gmail.com,",
        location:"Hyderabad 1",
    }
);
function getcontact(name)
{
    return mymap.get(name)
}
console.log(getcontact("vaishnavi"));



// 4. Create two objects person1 and person2 with properties name and age. Create a function “introduce” that prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself using the introduce function. 


var obj1={
    name:"vaish",
    age:"20"
}
var obj2={
    name:"priya",
    age:"30",
}
function introduce(a){
console.log(`I'm ${a.name}, i am ${a.age} years old`);
}
introduce(obj2);









// 5. You are developing a program to manage a list of unique items. Write a JavaScript program that uses a Set to store a collection of unique numbers. Use the Map object to associate each number with its square. Finally, print both the unique numbers and their corresponding squares. 


// Create a Set to store unique numbers
let uniqueNumbers = new Set();

// Add some numbers to the Set
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(4);
uniqueNumbers.add(5);
uniqueNumbers.add(3); // Duplicate number, won't be added

// Create a Map to associate each number with its square
let numberSquares = new Map();

// Iterate over the Set and add each number and its square to the Map
uniqueNumbers.forEach(number => {
    numberSquares.set(number, number * number);
});

// Print the unique numbers
console.log("Unique Numbers:");
uniqueNumbers.forEach(number => {
    console.log(number);
});

// Print the numbers and their corresponding squares
console.log("\nNumbers and Their Squares:");
numberSquares.forEach((square, number) => {
    console.log(`${number} => ${square}`);
});




// // 6 Create a simple JavaScript function named displayInfo that takes two parameters (name and role) and logs a messageG Use call to invoke the displayInfo function with specific argumentsG Use apply to invoke the displayInfo function with arguments passed as an arrayG Create another function named greet that logs a greeting with this contextG Use bind to create a new function boundGreet with a specific context and log the greeting. 
// Step 1: Create the displayInfo function
function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
}

// Step 2: Use call to invoke displayInfo with specific arguments
displayInfo.call(null, 'Alice', 'Developer');

// Step 3: Use apply to invoke displayInfo with arguments passed as an array
displayInfo.apply(null, ['Bob', 'Designer']);

// Step 4: Create the greet function that logs a greeting with this context
function greet() {
    console.log(`Hello, ${this.name}! Your role is ${this.role}.`);
}

// Step 5: Use bind to create a new function boundGreet with a specific context and log the greeting
let context = { name: 'vaish', role: 'Student' };
let boundGreet = greet.bind(context);
boundGreet();





// 7. Tasks9 Create an object named calculator with methods add, subtract, and multiplyG Implement the calculate method in the calculator object, which takes an operation ('add', 'subtract', or 'multiply') and two numbersG Use call to perform an addition operation using the calculate methodG Use apply to perform a multiplication operation using the calculate method with arguments as an arrayG Create another object named discountCalculator with a discount percentage property and a method applyDiscountG Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and can be reused. 

console.log("7 tasks")


// Step 1: Create the calculator object with add, subtract, and multiply methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    calculate: function(operation, a, b) {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            default:
                return 'Invalid operation';
        }
    }
};

// Step 2: Use call to perform an addition operation using the calculate method
let additionResult = calculator.calculate.call(calculator, 'add', 10, 5);
console.log('Addition Result (using call):', additionResult); // Output: 15

// Step 3: Use apply to perform a multiplication operation using the calculate method with arguments as an array
let multiplicationResult = calculator.calculate.apply(calculator, ['multiply', 10, 5]);
console.log('Multiplication Result (using apply):', multiplicationResult); // Output: 50

// Step 4: Create the discountCalculator object with a discountPercentage property and an applyDiscount method
const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function(amount) {
        return amount - (amount * this.discountPercentage / 100);
    }
};

// Step 5: Use bind to create a new function calculateDiscount bound to the discountCalculator object
let calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

// Reusing the bound function
let discountedPrice = calculateDiscount(100);
console.log('Discounted Price (using bind):', discountedPrice); // Output: 90
