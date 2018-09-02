class Phone{
    constructor(brand,size,ram,storage){
       this.brand=brand;
       this.size=size;
       this.ram=ram;
       this.storage=storage; 
    }

    get brandName(){
        return this.brand;
    }
    get size_of_phone(){
        return this.size;
    }
}

var iphone=new Phone("iphone","5 inches","2GB","64GB");
console.log(iphone.brandName);
console.log(iphone.size_of_phone);