//Destructing object


let address ={
    street: "Ryland Street",
    city: "San Jose",
    state: "California"
}

const {city, state} = address;
console.log(`My city is ${city}`);


// Destructing array

let arr = ["aa","bb","cc"];
let [ first ] = arr;
console.log(first);

// for of loop


let notes = [10, 20 ,30]
let total =0;
for(const note of notes){total +=note};


/// spread operator
let child1 ={name:"Leo"};
let child2={...child1, age:10};

console.log(child1);
console.log(child2);

//rest operator
function student(name){
    console.log("All students names without rest operator",name);
}

function students(...name){
    console.log("All Student names with rest operator", name);
}

student("Alex","Bob");
students("Alex","Bob");

//arrow vs traditional 

var traditional = function(name){return name;}

var arrow = name =>name;
console.log(traditional("anurag"));

console.log(arrow("anurag"));

 // this in arrow vs this in traditional

 function Traditional(){
     this.value=10;
     let temp =function(){console.log(`Traditional function value: ${this.value}`);}
        temp();
    }
function Arrow(){
    this.value=10;
    let temp=()=>{console.log(`Arrow function value:${this.value}`);}
    temp();
}

var traditional = new Traditional();
var arrow =new Arrow();


//Diff between let , var and const

function someFunction(){
    if(true){
        var something = "something";
    }
    console.log(something);
}

someFunction();


function someFunction(){
    if(true){
        let something="something";
    }

    console.log(something);
}

someFunction();


const temp =10;
temp =100;

const obj={};
obj.name="anurag"

const arr =[];
arr.push(10);

//padStart and padEnd


let str = "Anurag"
console.log(str.padStart(10,'$'));
console.log(str.padEnd(10,'$'));

// how async works?

const students = [
    {name: "Anurag", year:2},
    {name: "Rajiv", year:2}
]

function getStudents(){
    setTimeout(()=>{
        console.log(students);
    },1000);
}

function createStudent(){
    setTimeout(()=>{
        students.push({name:"new name", year:1})
    },5000);
}

createStudent();
getStudents();


//callback

const students = [
    {name: "Anurag", year:2},
    {name: "Rajiv", year:2}
]

function getStudents(){
    setTimeout(()=>{
        console.log(students);
    },1000);
}

function createStudent(callback){
    setTimeout(()=>{
        students.push({name:"new name", year:1})
        callback();
    },5000);
}

createStudent(getStudents);

//Promises

const students = [
    {name: "Anurag", year:2},
    {name: "Rajiv", year:2}
]

function getStudents(){
    setTimeout(()=>{
        console.log(students);
    },1000);
}

function createStudent(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            students.push({name:"new name", year:1})
            const err = false;
    
            if(!err){
                resolve();
            }else{
                reject('Something went wrong');
            }
    
        },5000);
    }); 
}

createStudent().then(getStudents());


const promise1 = Promise.resolve();
const promise2 =20;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000, 'done!');
});

Promise.all([promise1, promise2, promise3]).then(values=> console.log(values));

// Async and await

const students =[
    {name: "Anurag", year :2},
    {name: "Rajiv", year:2}
]

function getStudents(){
    setTimeout(()=>{
        console.log(students);
    },1000);
}

function createStudent(callback){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            students.push({name:"new name", year:1})
            const err = false;
    
            if(!err){
                resolve();
            }else{
                reject('Something went wrong');
            }
    
        },5000);
    }); 
}


async function test(){
    await createStudent();

    getStudents();
}


test();

//Closure

function outer(){
    let outerVariable = 5;

    function inner(){
        console.log(`Value of outer variable is: ${outerVariable}`);
    }

    return inner;
}

let test = outer();
test();

//call and apply

obj = {name:"Anurag"};
function displayNameAndAsset(asset1, asset2){
    let totalAsset= asset1+asset2;
    console.log(`Name is ${this.name} and asset is ${totatAsset} `);
}

console.log(displayNameAndAsset.call(obj,1,2));



obj = {name:"Anurag"};
function displayNameAndAsset(asset1, asset2){
    let totalAsset= asset1+asset2;
    console.log(`Name is ${this.name} and asset is ${totalAsset} `);
}

let assetArray = [1,2];
console.log(displayNameAndAsset.apply(obj,assetArray));

//bind
obj = {name:"Anurag"};
function displayNameAndAsset(asset1, asset2){
    let totalAsset= asset1+asset2;
    console.log(`Name is ${this.name} and asset is ${totalAsset} `);
}

console.log(displayNameAndAsset.bind(obj,1,2));

// console dir

console.dir(displayNameAndAsset.bind(obj));
// complete code
obj = {name:"Anurag"}
function displayNameAndAsset(asset1, asset2){
    let totalAsset= asset1+asset2;
    console.log(`Name is ${this.name} and asset is ${totalAsset} `);
}

let assetArray=[1,2];
let bounded = displayNameAndAsset.bind(obj);
console.log(bounded(1,2));


//older way of declaring objects 

function Student(name, year){
    this.name=name;
    this.year=year;
}

let student1 =new Student("anurag",2);
console.log(student1);

// prototype

function Student(name, year){
    this.name=name;
    this.year=year;
}

Student.prototype.printName=function(){
    console.log(`Name of the Student is ${this.name}`);
    this.newProps="A new property";
}

let student1 =new Student("Anurag",2);
console.log(student1);
console.log(student1.printName());

//Prototype inheritance

function Student(name, year){
    this.name=name;
    this.year=year;
}

Student.prototype.printName=function(){
    console.log(`Name of the Student is ${this.name}`);
    this.newProps="A new property";
}

function TA(name, year, salary){
    Student.call(this,name, year);
    this.salary=salary;
}

let ta=new TA("Anurag", 2,10);

console.log(ta);
TA.printName();

// using Object.create()

function Student(name, year){
    this.name=name;
    this.year=year;
}

Student.prototype.printName=function(){
    console.log(`Name of the Student is ${this.name}`);
    this.newProps="A new property";
}

function TA(name, year, salary){
    Student.call(this,name, year);
    this.salary=salary;
}

TA.prototype = Object.create(Student.prototype);

let ta=new TA("Anurag", 2,10);

console.log(ta);
ta.printName();

//class 

class Student{
    constructor(name, year){
        this.name=name;
        this.year=year;
    }

    printName(){
        console.log(`Student name is ${this.name}`);
    }
}

let student =new Student("Anurag", 2);
console.log(student);



