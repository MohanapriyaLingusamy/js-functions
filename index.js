//Addition
function add(val1,val2)
{
  return val1+val2;
}
let varr=add(2,2)
console.log(varr)
//output:4

//Subtration
function sub(val1,val2)
{
  return val1-val2;
}
let varr=sub(2,2)
console.log(varr)
//output:0

//Multiplication
function mul(val1,val2)
{
  return val1*val2;
}
let varr=mul(2,2)
console.log(varr)
//output:4

//Division
div=(val1,val2)=>{
  return val1/val2;
}
console.log(div(2,2))
//output:1

//Modulo
mod=(val1,val2)=>{
  return val1%val2;
}
console.log(mod(2,2))
//output:0

//compare number
comNum=(val1,val2)=>{
  return (val1===val2)?true:false
}
console.log(comNum(2,2))
//output:true

//compare String
comstr=(val1,val2)=>{
  return (val1===val2)?true:false
}
console.log(comNum("2","2"))
//output:true

//compare values
conval=(val1,val2)=>{
  return(typeof(val1)===typeof(val2))? ((val1===val2)?true:false):false
}
console.log(conval("2",2))
//output:false
console.log(conval(3,3))
//output:true



//Grade Finder