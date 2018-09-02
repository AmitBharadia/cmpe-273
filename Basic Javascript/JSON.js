var json_str='{"courses":[{"name":"cmpe202","day":"Monday","No of hours":2},{"name":"cmpe272","day":"Thursday","No of hours":3},{"name":"cmpe273","day":"Tuesday","No of hours":2.5}]}';  

var obj=JSON.parse(json_str);
console.log(obj);
var days=[];
for(i=0;i<obj.courses.length;i++){
    days.push(obj.courses[i].day);
}
console.log(days);

var days_object={days};
console.log(JSON.stringify(days_object));