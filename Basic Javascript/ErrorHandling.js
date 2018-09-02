var data1=[1,8,9 , 65 , 78, 98];
var data2=[1,2,2,9,5];

var check=(data)=>{
    try{
        var prev=-1;
        for(i=0;i<data.length;i++){
            if(prev>data[i]){
                throw "Data need to be in ascending order" ;
            }else{
                prev=data[i];
            }

        }
        console.log("Data is in ascending order");
    }catch(err){
        console.log(err);
    }
}

check(data1);
check(data2);
