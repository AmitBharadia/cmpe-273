var height=[58,64,78,25,65,87,49,25];
var max1="-1",max2="-1";

for(i=0;i<height.length;i++){
  if(height[i] >max1){
      max2=max1;
      max1=height[i];
  }else if(height[i] <max1 && height[i]>max2){
      max2=height[i];
  }
}

console.log("Tallest and Second tallest  heights are " + max1 + ", " +max2);