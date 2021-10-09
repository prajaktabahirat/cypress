
/*var prajakta=50;
var xyz;
var nameofstudent="prajakta";

var abc=[100];

var xyz=[1,2,3,4,5,6,7,8,9,10];

console.log(typeof(prajakta));
console.log(typeof(xyz));
console.log(typeof(nameofstudent));
console.log(abc);
console.log(xyz);

console.log(xyz[0]);
console.log(xyz[9]);
console.log(xyz[5]);
*/


//let abc=[1,2,3,4,5,6,7,8,9,10];
//for(i=0;i<10;i++)
//{
 //   console.log(abc[i]);
//}

/*
let x=1;
let y=2;
let z=3;
let k=4;
console.log(x==y);


for(i=5;i<10;i++)
{
   console.log(abc[i]);
}
*/

/*
let ab=[22,65,98,68,40];
//for(let i=0;i<=4;i++)
for(let i=0;i<=ab.length-1;i++)
{
console.log(ab[i]);
}
*/


//******array methods

//*************map method**************


//let numarray=[10,20,30,40,50,60,70,80]

/*
// numarray.map(function(element,index,arr)
// {
//    console.log(arr);
// })
let addition=numarray.map(function(element,index,arr)
{
   //return element+5;
   return index+1;
})
console.log(addition)

*/

//************filter method*************

//let divisionby20=numarray.filter(function(element,index,array)
//{
//return element%20==0;
//})
//console.log(divisionby20)

//**********reduce method********

//numarray.reduce(function(preVal,currVal,i,arr)
//{
//   return sum=preVal+currVal;
//},0)
//console.log(sum)

/*
numarray.reduce(function(preVal,currVal,i,arr)
{
   return sum=preVal+currVal;
},20)

console.log(sum)
*/


let value=[9,6,2,1]
let mul=value.reduce(function(preval,currval,i,array)
{
   return preval*currval;
},10)
console.log(mul);