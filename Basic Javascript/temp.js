function counterInc(){
    let counter = 0;
    
    return (function plusOne(){
       return counter+=1;
    });
}

const adder=counterInc();
console.log(adder());
console.log(adder());
console.log(adder());
console.log(adder());

