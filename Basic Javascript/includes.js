//(a)
var studentId=[14,48,49,25,69];
console.log("Check if 13 has failed "+studentId.includes(13));
console.log("Check if 25 has failed "+studentId.includes(25));
console.log("Check if 25 has failed ater index 1 "+studentId.includes(25,1));

//(b)
var str='You are a very motivated, sir' ;
console.log("Check if string contains word motivated "+str.includes('motivated'));
console.log("Check if string contains word motivated after index 55 "+str.includes('motivated',55));

//(c)
var perform=(a)=>{
    switch(typeof(a)) {
        case "number":
            console.log("It is number so doubling its value "+a*2);
            break;
        case "string":
            console.log("It is string so appending same at the end "+(a+a));
            break;
        case "boolean":
            console.log("It is boolean so reversing it "+!a);
            break;
        case "undefined":
        console.log("It is undefined so do nothing");
            break;
        default:
           //do nothing        
    }
}

perform(12);
perform("Amit");
perform(true);
perform();
