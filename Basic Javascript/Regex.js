var pattern=/(INR|USD)[0-9]{1,10}(\.[0-9]{1,2})/i;
console.log (pattern.test("INR10.00"));   
console.log (pattern.test("USD10.00")); 
console.log (pattern.test("USD10.")); 
console.log (pattern.test("INR1000000000000000.00")); 
console.log (pattern.test("inr1000000.00"));