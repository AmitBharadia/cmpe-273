var name="Amit Bharadia";

//function declaration
var A=sort_character(name);
function sort_character(s){
  s=s.split("");  
  s=s.sort();   
  s=s.join("");
  return s; 
}
console.log("Output of function declaration for sorting of characters :"+A);

//function expression
var B=function(s){
    s=s.split("");  
    s=s.sort();   
    s=s.join("");
    return s; 
}
console.log("Output of function expression for sorting of characters :" +B("Amit Bharadia"));

//Arrow Functions : they are part of ES6
var E=(s=>{
    s=s.split("");  
    s=s.sort();   
    s=s.join("");
    return s; 
});
console.log("Arrow Functions to sort characters of String :" + E("Amit Bharadia"));

//Named function expression : used for recursion and debugging
var C=function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
}; 

console.log("Using named functon expresion for finding factorial of a 5 using recursion :"+C(5));

//Immediately-invoked function expressions (IIFE): They are executed immediately after there creation
var D=(function(){
    console.log("Immediately-invoked function expression : I got executed immediately. No need to call me.");
}) ();
