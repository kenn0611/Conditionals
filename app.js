//Taking first number from user
let a = prompt("Enter a First Number");

//Taking operator from user
const operator = prompt("Enter Operator you want to perform");

//Taking second number from user
const b = prompt("Enter a Second Number");

//parsing of first number into integer
const num1 = parseInt(a);

//parsing of second number into integer
const num2 = parseInt(b);


let result;
//if user enter + operator then perform addition and print result
if(operator === '+') {
    result = num1 + num2;
    document.write("The answer is "+result);
}

//if user enter - operator then perform subtraction and print result
else if(operator === '-') {
    result = num1 - num2;
    document.write("The answer is "+result);
}

//if user enter * operator then perform multiplication and print result
else if(operator === '*') {
    result = num1 * num2;
    document.write("The answer is "+result);
}

//if user enter / operator then perform division and print result
else if(operator === '/') {
    result = num1 / num2;
    document.write("The answer is "+result);
}

//if user enter % operator then perform modulus and print result
else if(operator === '%') {
    result = num1 % num2;
    document.write("The answer is "+result);
}

//if user enter any wrong input then alert
else {
    alert("Enter valid input!!!");
}