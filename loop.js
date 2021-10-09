// Loop iteration

//for loop-used to repeat a specific block of code a known number of times.
//while loop-to repeat a section of code an unknown number of times until a specific condition is met.
//do while loop-control flow statement that executes a block of code at least once, and then repeatedly 
//executes the block, or not,depending on a given boolean condition at the end of the block

// for([initialization];[conditioncheck];[increment/decrement]){

// }

// for(let i=0;i<10;i++)
// {
//     console.log(i)
// }

//----------------------------------------------------------------------------------------
//or
let i=0
for(;i<10;){
    console.log(i)   //0-9
    i++ //i--
}
console.log(i)
//----------------------------------------------------------------------------------------

//print reverse
for(let i=10;i>=0;i--)
{
    console.log(i)
}

//----------------------------------------------------------------------------------------

let k="abhay"
let a=""
let b=""

for(let i=0;i<k.length;i++){
    a=k[i]+a
}

for(let i=k.length-1;i>=0;i--)
{
    b=b+k[i]
}
console.log(a)
console.log(b)
//----------------------------------------------------------------------------------------

let r=[2,3,2,44,55,66,55,3,66]
let rk=[] //[2]
let du=[]
//first iteration
for(let x=0;x<r.length;x++){
    if(rk.indexOf(r[x])<0){
        rk.push(r[x])
    }
    else{
        du.push(r[x])
    }
} 
console.log(du)

//or--------------------------------------------------------------------------------------
r1=[2,3,2,44,55,66,55,3,66]
rk1=[]
du1=[]

for(let i=0;i<r1.length;i++){
    if(!rk1.includes(r1[i])){
        rk1.push(r[i])
    }
    else{
        du1.push(r1[i])
    }
}
console.log(du1)

//or---------------------------------------------------------------------------------------
// const array=[11,2,3,5,6,5,11]
// let duplicates=[]
// for(let i=0;i<array.length;i++){
//     if(array[i+1]===array[i]){
//         duplicates.push(array[i])
//     }
// }
// console.log(duplicates)

//or---------------------------------------------------------------------------------------

let arr=[15,66,88,12,66,57,88,15,88,88,88]
let unique=arr.filter((el,index,array)=>{
    if(array.indexOf(el)==index){
        return true;
    }
})
console.log(unique)

//or---------------------------------------------------------------------------------------
let arr1=[15,66,88,12,66,57,88,15,88,88,88]
let uniquee=arr1.filter((el,index,array)=>{
    return(array.indexOf(el)==index)
})
console.log(uniquee)

//or---------------------------------------------------------------------------------------
let arr2=[12,63,32,12,88,55,99,32,99,99,12,121,12]
let unique2=arr2.filter((el,index,array)=>{
    return((array.indexOf(el,array.indexOf(el)+1)==index))
})
console.log(unique2)

//-----------------------------------------------------------------------------------------
let ia="prajakta bahirat is learning javascript"
let count=0
for(let i=0;i<ia.length;i++)
{
    if(ia[i]==" "){
        count=count+1
    }
}
console.log(count)
console.log("prajakta bahirat is learning javascript".split(' ').length-1)

//--------------------------------------------------------------------------------------
//reverse string
hn="prajakta bahirat is learning javascript"
a=""
for(let i=0;i<hn.length;i++){
    a=hn[i]+a
}
console.log(a)

//while loop

let iaa=0
while(iaa<=10){
    console.log(iaa)  // 0 1
    iaa=iaa+1
}

//random number----->while loop

// [2,3,2,44,55,66,55,3,66].filter(function(el,index,arr){
// })

let chars=[33,55,33,22,45,33,55,33,33]
let uniqueChars=chars.filter((el,index)=>{
    return chars.indexOf(el)>index;
})
console.log(uniqueChars)
