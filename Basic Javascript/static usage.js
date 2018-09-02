var list=[1,8,56,24,6,9,4,8,25,78];
class BlackBox{
  static findDuplicates(list,target){
      var occurrence=0;
      for(var i=0;i<list.length && occurrence<=2;i++){
          if(list[i]==target){
            occurrence++;
          }
      }
      if(occurrence==2){
          console.log("Tha target value " +target + " has two or more than two occurences");
      }else{
        console.log("Tha target value " +target + " has " +occurrence +" occurences");
      }
  }
}
BlackBox.findDuplicates(list,8);
BlackBox.findDuplicates(list,9);