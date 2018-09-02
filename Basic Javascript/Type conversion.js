//Problem a)
var list=['1','15','45','96'];
var sum=0;
for(i=0;i<list.length;i++){
    sum+=Number(list[i]);
}
console.log("Sum is : "+String(sum));

//Problem b)
var list=[1,15,45,96];
var sum="";
for(i=0;i<list.length;i++){
    sum+=String(list[i]);
}
console.log("Sum is : "+String(sum));

//Problem c)
console.log(String(new Date));
console.log(Number(new Date));