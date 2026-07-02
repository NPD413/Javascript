//alert('hello')
//alert('goodgob!')
console.log(10.90*2+20.95+4.99+4.77)
//to create an variable use let
//we can't use special words eg let
//can't start with a number
//can't use special characters except:$_
//however we can use name3r
// can use _name,$name underscore and dollar symbol are excepted by javascript
//; is important in javascript as it indicates the end of the instruction as the punctuation in english
let variable1=3;
console.log(variable1);

let calculation=2+2;
console.log(calculation);
console.log(calculation*2);

let result=calculation+2;
console.log(result);

let message="hello";
console.log(message);

//to reassign a name to a variable we do not use let as let creates a new variable in javascript
//we can't create 2 variables with the same name in javascript as it will create an errorv  
variable1=5;
console.log(variable1);
variable1=variable1+1;
console.log(variable1);

//we can create an variable with the key word const
const variable=3;
//we can't modify the variable again as it will remain const
//best practise is used to use const

//we can use the keyword var to create an variable
var value=1;
//but var is not the best practice to use in javascript

//to find the type in javascript we can use
console.log(typeof(message));

//boolean and ifelse in javscript
console.log(3>5);
console.log(typeof true);
console.log(5=='5')//the output:true
//as javascript convert to the same type 
//so that's why we use === in javascript it's an strict equals to 
console.log(5 === '5')//ouput:false

//if-statements in javascript
if(false){
    console.log('hello');
}else{
    console.log('bye');
}

if(30>=16){
    console.log('you can drive');
}else{
    console.log("you can't drive");
}
//we can use else if in javascript
if(15>=16){
    console.log('you can drive');
}else if(15>=14){
    console.log ('alomost there!');
} else{
    console.log("you can't drive");
}

//let's create an variable and how can we use it with the javascript

const age=15;
if (age>=18){
    console.log('can drive');
}else{
    console.log('can not drive');
}

//logical operator in javascript
console.log(true && false);
console.log(0.2 >=0 && 0.2<1/3);

//or operator
console.log(true || false);

//not operator
console.log(!true);


//falsy value 0 '' NaN undefined null any value not on this list is truthy

if(0){
    console.log("non"); //output:no exxecution will take place
}

const cartquantit=4;
if(cartquantity){
    console.log('cart has product'); //output: cart has product as the number is more than 0 so it's truthy value
}

console.log(!0) //output:true
let variable1; // note we can't use it with const variable  to use it with const we must define it like const variable = undefined;
console.log(variable1)//output: undefined


function claculateTax(parameter1){
    console.log(parameter1*10);
}
claculateTax(2000);// the 2000 will be assigned to the aprameter and can be easily used inside the function
claculateTax(2098);//output:20980
//the above line also tells passing a value into the function
//alert('hello') this is an example of an function and a parameter


function totalquantity(tax,taxpercent){
    console.log(tax*taxpercent)
}
totalquantity(2000,0.2)

function greet(){
    return 'hello';
}
greet()

function greet(name){
    return( `hello &{name}`)
}
greet('rahul')