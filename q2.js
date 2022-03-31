const arr=["Masai", "School"];
var res=[];
arr.forEach(function(ele,i,arr){
  res.push(ele[0]);
  return res;
})
console.log(res);