var tile_required=(length=20,breadth=10,height=4)=>{
    return length*breadth*height;
}

console.log("Part A:"+tile_required(15,5,8));
console.log("Part B:"+tile_required(undefined,5,10));
console.log("Part C:"+tile_required(undefined,5));
console.log("Part D:"+tile_required());