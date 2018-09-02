let a=[1, 2 , 3 , 4];

let b=[-1, 0, ...a, 5, 6];

console.log(b);
console.log(a);

let c=[...b];
a.unshift(-2);

console.log(c);
console.log(b);
console.log(a);

let arr = ["aa","bb","cc"];
let [ ] = arr;
console.log();