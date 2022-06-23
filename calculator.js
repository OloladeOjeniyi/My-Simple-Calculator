function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function modulus(x, y) {
    return x % y;
}
function exponent(x, y) {
				return x ** y
}

function calculate(){
				var x = parseInt(prompt("Enter first number"));
				var operator = prompt("Enter operator ( + , - , * , / , % , ** )");
				var y = parseInt(prompt("Enter second number"));
      var result = 0;
if (operator === "+"){
				result = add(x,y);
}
else if (operator === "-"){
				result = subtract(x,y); 
}
else if (operator === "*"){
				result = multiply(x,y);
}
else if (operator === "/"){
				result = divide(x,y); 
}
else if (operator === "%"){
				result = modulus(x,y);
}
else if (operator === "**"){
				result = exponent(x,y);
}
else{
			alert("please enter a valid operator ( + , - , * , / , % , ** )")	;
}
alert(x + operator + y + " = "+ result);
}
calculate();
