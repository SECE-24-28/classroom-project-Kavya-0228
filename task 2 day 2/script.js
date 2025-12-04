//var x = 10
//x = true
//console.log(x)
/*  */
//named function-funtion declaration
/*function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

//function expression-un named function
var sub = function (a, b) {
  return a - b;
};

console.log(sub(12, 2));

//ECMAScript 6
var div = (a, b) => {
  return a / b;
};

console.log(div(20, 2));

//if it contains one return statememt

var div = (a, b) => a / b;

console.log(div(20, 2));

//if it contain one argument

var mul = a=> a * 10;

console.log(mul(10));
*/


/*for(let i = 1; i<=5; i++){
    if(i%2==0){
    console.log("Num",i);
    }
}
*/

/*
for(let i = 2; i<=10; i+=2){
    console.log("Number:",i)
}
let i = 2;
while(i<=20){
    console.log(i)
    i+=2
}
var arr = [23,28,3,6]
console.log(arr[0])
var newArr = new Array(2, 3, 8,6);
console.log(arr.length)

var arr = [1,2,3,4,5]
for(let i=0; i < arr.length; i++){
    console.log(arr[i]);
}
*/
/*
let arr = ['a','b','c'];
arr.push('d')
console.log(arr)
arr.unshift('z')
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)

//higher order function-> a function which takes another function as an argument 

    function a(arg,a,c){
    arg() //it will print the b and next a will be print
    console.log("inside function a",a)
      arg(c) //in this a next b
      }
function b(c){
    console.log("inside function b",c)
}
a(b,10,20)

//callback function->a function which is passed as an argument to another function 

function a(arg1,arg2,arg3){

    //arg()it will print the b and next a will be print
    console.log("inside function a",arg2)
      if(arg3 > 10){
        arg1(arg3) //in this a next b
      }
}
function b(arg){
    console.log("inside function b",arg)
}
a(b,10,20)

function multiplyBy(factor){
    return function(number){
        return number*factor;
    }
}
const mulBy2 = multiplyBy(2);
const mulBy4 = multiplyBy(4);

console.log(mulBy2(10))
console.log(mulBy4(20))
*/

//for each->higher order because it accepts another function(it handles elements,condition)
/*
const arr = [1,2,3,4,5]
arr.forEach((el) => {
    console.log('el =>',el)
})

// 1) [2,4,6,8,10]
const arr1 = [1,2,3,4,5];
const newArr = [];
arr1.forEach((ele) => {
    newArr.push(ele*2);
})
console.log(newArr)

//or
//2)
//map is used to transform array elements
//no of elements are same in original and new array
//map will return an array with length equal to original array
const res = arr.map((el)=>{
    return el*3
})
console.log(res)


//day4
//filter->it is used to filter array elements based on condition
const arr = [1,2,3,4,5]
const res = arr.filter((el) => {
    return el%2===0
})
console.log(res) // [2,4]

// if we give return true means all the elements are printed return false means gives empty set
const arr1 = [10,20,'J',30,'A','V','A']
const res1 = arr1.filter((el) => {
    return typeof el === 'string'
})
console.log(res1) //[10,20,30]

//[10,1.2,-0.7,'Hello',true]
const arr2 = [10,false,1.2,-0.7,null,'',undefined,'Hello',true]
const res2 = arr2.filter(ele => ele)
console.log(res2)


//string methods


const firstName = "John"
const lastName = "Smith"
//length
console.log(firstName.length)
//toUpperCase
console.log(firstName.toUpperCase())
//toLowerCase
console.log(lastName.toLowerCase())
//split
console.log(firstName.split(""))
//replace
console.log(lastName.replace("Smith","Doe"))
//substring
console.log(firstName.substring(0,2))
//const fullName = firstName + " " + lastName
const fullName = ` Full name: ${firstName} ${lastName}`
console.log(fullName)
const countwords = (str) => {
    return str.split(" ").length
    

}
console.log(countwords("The quick brown fox")) 
//output:4

let person = {
    name:"John",
    age:25,
    isStudent:true
};
const variable = "name"
console.log(person[variable])
//objects methods->objects.keys,object.values,object.entries

const p1 ={name:"Alice",age:22};
console.log(Object.keys(p1))
console.log(Object.values(p1));
console.log(Object.entries(p1));

let marks = {
    math:90,
    science:80,
    english:70
};
Object.keys(marks).forEach((key) => {
    console.log(`${key}=>${marks[key]}`);
});
//for(const [key,value] of Object.entries(marks)){
    //console.log(`${key}=>${value}`);}

/*math=>90
science=>80
english=>70
*/
/*
let students = [
    {name:"John",age:20, grade:9},
    {name:"Emma",age:22, grade:8.5},
    {name:"Mike",age:19, grade:7.5}
];


console.log(students[0].name); 
// output:
// John is 20 years old
//Alice is 22 years old
//Bob is 19 years old
students.forEach((st) => {
console.log(`${st.name} is ${st.age} years old`);
})

//students with grade greater than 8: John Emma

const res3 = students.filter((st) => st.grade > 8);
const names = res3.map((st) => st.name);
console.log(`students with grade greater than 8: ${names.join(", ")}`);
//console.log(toString(res3)); it also works 87
// output: students with grade greater than 8: John, Emma
*/

//accessing DOM elements
const headingElement = document.getElementById("heading");
console.log(headingElement);
headingElement.innerHTML = "No heading"; //changes the content of heading(hello word into no heading)
headingElement.style.color = "blue"; //changes the color of heading to blue
headingElement.style.border = "1px solid black"; 
headingElement.className="new-Class"

const btnElement = document.getElementById("btn");
btnElement.addEventListener("click", () => {
    headingElement.innerHTML = "Heading changed";
    headingElement.style.color = "purple";
    headingElement.style.border = "2px solid pink";
})

//using getelementbyclassname
const containerElement = document.getElementsByClassName("container");
console.log(containerElement[0]);
