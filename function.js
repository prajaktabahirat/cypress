//For-each -array

//let languages=["hindi","marathi","english","tamil"]
//for(let i=0;i<languages.length;i++)
//{
//console.log(languages)
//console.log('i know ${languages[i]}')
//}
// let tt =languages.forEach(function(ele,index,arr)
// {
//  console.log('i know ${ele}')
// })

//Function

//let a=20
//let b=40

//console.log(a+b)
//console.log(a-b)
//console.log(a*b)
//console.log(a/b)

// let x=10
//let y=5
//console.log(x+y)
//console.log(x-y)
//console.log(x*y)
//console.log(x/y)



//ways of using function
//******Function Declaration******

//function cal(a,b)     //keyword functionName(parameter){statement}
//{
//console.log(a+b)
//console.log(a-b)
//console.log(a*b)
//console.log(a/b)
//}
//cal(10,20)           //function call  //argument or values

//*********Function Expression******** */

/* let cal=function(a,b)            
{
   console.log(a+b)
   console.log(a-b)
   console.log(a*b)
   console.log(a/b)
}
cal(50,20)
cal(300,500)
*/

//***************Arrow function********** */

/* 
let cal=(a,b)=>{
   console.log(a+b)
   console.log(a-b)
   console.log(a*b)
   console.log(a/b)
}
cal(25,30)
*/

//example of function declartion,function expression,arrow function

//*******function Declaration****** */
/*
function mul(a,b)
{
    console.log(a*b)
}
mul(2,4)
*/

/*
//**********function expression********
let mul = function(a,b)
    {
        console.log(a*b) 
    }
    mul(10,20)
    */

//******Arrow function**** */
/*    
let sub=(a,b)=>{
        console.log(a-b)
    }
    sub(5,5)
*/

// basic types of function
//----------Function without parameter and without return type
/*
function addone()
{
    console.log(6+4)
}
addone()
addone()

*/

//---------Function with parameter and without return type
/*
function addone(a,b)
{
    console.log(a+b)
}

let y=addone(20,40)
//console.log(y)
*/

//----------Function with parameter and with return type

/*
function addone(a,b)
{
    return a*b
}
let r=addone(10,10)
console.log(r)
console.log(r/5)
console.log(r-99)          //eg of 100rs
*/

//----------function without parameter with return
/*
function piV()
{
     return 3.14
}
let  f =piV()
console.log(f)
*/

//************************************************19.8.21***************************************** */

// let birthyear=[2200,2003,2015,2005,2017]
// let birthyear2=[2013,2089,1988,2000,2009]

// function printA(arr){
//     let newA=[]
//     for(let i=0;i<arr.length;i++)
//     {
//         newA.push(2021-arr[i])
//     }
//     return newA
// }
// function printA20add(arr){
//     let newA=[]
//     for(let i=0;i<arr.length;i++)
//     {
//         newA.push(arr[i]+20)
//     }
//     return newA
// }

// let a=printA(birthyear)
// let b=printA(birthyear2)
// console.log(a)
// console.log(b)

// let c=printA20add(birthyear)
// let d=printA20add(birthyear2)
// console.log(c)
// console.log(d)

//eq---------------------------------------------------
// let Year = [2013, 2089, 1988, 2000, 2009]
// let person = ["Abhay", "Komal", "Rajveer", "Kajal", "vaibhav"]

// function printA(arr, fun) {
//     let newA = []
//     for (let i = 0; i < arr.length; i++) {
//         newA.push(fun(arr[i]))
//     }
//     return newA
// }

// let age = function (el) {
//     return 2030 - el
// }
// let add100 = function (el) {
//     return el + 100
// }
// let multiply2 = function (el) {
//     return el * 2
// }
// let divide50 = function (el) {
//     return el / 50
// }
// console.log(printA(Year, age))
// console.log(printA(Year, add100))
// console.log(printA(Year, multiply2))
// console.log(printA(Year, divide50))

// //*************************lexical scope************************** */

// function add(a, b) {
//     console.log(a + b)
//     let p = 10
//     let q = 100

//     AddB()
//     function AddB() {
//         let x = 25
//         let y = 30
//         console.log(p + q)
//         console.log(x + y)
//         AddC()
//         function AddC() {
//             console.log(p + q + x + y)
//         }

//     }
// }
// add(50, 60)