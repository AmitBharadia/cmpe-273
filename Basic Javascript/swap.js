a=5; // Not declaring the variables is allowed when not in strict scope
b=10; // Not declaring the variables is allowed when not in strict scope
console.log("Before swapping : a - " + a+ " b - "+b);
var swap=(a,b)=>{
    'use strict'
     var temp=a
     //temp=a; ---This will give error if used in strict scope
     a=b;
     b=temp;
     console.log("After swapping : a - " + a+ " b - "+b);
}
swap(a,b);

