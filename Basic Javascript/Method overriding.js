class CSU{
    minimum_units(){
        console.log("Minimum units are 12");
    }
}

class SJSU extends CSU{
    minimum_units(){
        console.log("Minimum units are 9");
    }
}

var csu=new CSU();
var sjsu=new SJSU();
csu.minimum_units();
sjsu.minimum_units();