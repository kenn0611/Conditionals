//Taking first number from user
var a = prompt("Enter a First Number");

//Taking operator from user
var operator = prompt("Enter Operator you want to perform");

//Taking second number from user
var b = prompt("Enter a Second Number");

//parsing of first number into integer
var num1 = parseInt(a);

//parsing of second number into integer
var num2 = parseInt(b);


//if user enter + operator then perform addition and print result
if(operator === '+') {
    var result = num1 + num2;
    document.write("The answer is "+result);
}

//if user enter - operator then perform subtraction and print result
else if(operator === '-') {
    var result = num1 - num2;
    document.write("The answer is "+result);
}

//if user enter * operator then perform multiplication and print result
else if(operator === '*') {
    var result = num1 * num2;
    document.write("The answer is "+result);
}
//if user enter / operator then perform division and print result
else if(operator === '/') {
    var result = num1 / num2;
    document.write("The answer is "+result);
}

//if user enter % operator then perform modulus and print result
else if(operator === '%') {
    var result = num1 % num2;
    document.write("The answer is "+result);
}

//if user enter any wrong input then alert
else {
    alert("Enter valid input!!!");
}