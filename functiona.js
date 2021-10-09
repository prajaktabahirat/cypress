//function declaration
// function add(){
//     console.log('Hello')
// }
// add()

// //function expression
// let add=function(){
//     return a+b
// }
// add()

// arraow function
// let add=()=>{
//     return a+b
// }
// add()

// Sub(12,13)
// function sub(x,y){
//     console.log(x-y)
//}

//-------------------------------------------------------
// a(22,23)
// let a=(x,y)=>{
//     console.log(x-y)
// }

// a(22,23)
// let a=(x,y)=>{
//     console.log(x-y)
// }

let h=[()=>console.log("bye"),"hello"]  //h[0]=()=>console.log("bye")....(is a expression)
h[0]()     //bye

let g={
    age:23,
    h:()=>console.log("BBBBBBye")
}
g['h']()

//-----------------------------------------------------------------------------------------------
let x=10
console.log(x)   //10

let hp=function(){
    console.log('Hello')
}
hp()
console.log(hp)

//-------------------------------------------------------------------------------------------

let add=function(x,y){
    return x+y
}
let hh=add(2,3)
console.log(hh)  //5
console.log(add)  //[function:add]

//------------------------------------------------------------

let fn=function(x,y){
    return x+y
}
function sub(fn){
    let a=fn(3,4)
    return a
}
let rr=sub(add)
console.log(rr)   //7

//--------------------------------------------------------------------

//function arr as param and return type is also array
let hn=[1,2,3,4,5]
//[3,4,5,6,7]
function addTwo(arr){

    //[1,2,3,4,5]
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]+2    
    }
    return arr
}
let bb=addTwo(hn)
console.log(bb)    //[3,4,5,6,7]
console.log(bb.reduce((acc,el)=>el+acc))    //25

//passing obj as a parameter to another function

let pe={
    firstName:"Rajveer",
    age:2
}
function updateObj(obj){
    obj.firstName="Vaibhav"
    console.log(obj.firstName)   //vaibhav  //using same memory with another addrees
}
updateObj(pe)   //vaibhav
console.log(pe.firstName)
//--------------------------------------------------------------------------------------

let pep={
    firstName:"Rajveer",
    age:2
}
function updateObj(obj){
    obj.firstName="abhay"
    return[obj.age,obj.firstName]
}
let bnb=updateObj(pep)
console.log(bnb[0])    //abhay
                        //2

//------------------------------------------------------------------------------
let pop={
    firstName:"Rajveer",
    age:20
}
function updateObj(obj){
    obj.firstName="abhay"
    return obj
}
let bob=updateObj(pop)
console.log(bob['age'])    //20
console.log(bob['firstName'])   //abhay
