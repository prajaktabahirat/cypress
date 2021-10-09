// let numbers=[1,2,3]
// console.log(numbers)

// numbers[95]=10
// console.log(numbers.length)
// console.log(numbers)
// console.log("-----------------------------------------------------------")

// //Destructuring

//  let firstName=["prajakta","komal","kajal","abhay","rajveer"]
// // stud1=firstName[0]
// // stud2=firstName[1]
// // stud3=firstName[2]
// // stud4=firstName[3]
// // stud5=firstName[4]

// // console.log(stud1)
// // console.log(stud2)
// // console.log(stud3)
// // console.log(stud4)
// // console.log(stud5)
// // console.log("-----------------------------------------------------------")

// //In ES6 Version

// // let [stud1,stud2,stud3,stud4,stud5]=firstName
// // console.log(stud1)
// // console.log(stud2)
// // console.log(stud3)
// // console.log(stud4)
// // console.log(stud5)
// // console.log("-----------------------------------------------------------")

// //Object--------------------------------------

// let [stud1,stud2,stud3,stud4,stud5]=firstName
// let=[stud1,stud2,stud3,stud4,stud5] 
//     let body = {
    
//         students:[
//             {
//                stud1:"st1",
//                age:1
//             },
//             {
//                 stud1:"st2",
//                 age:32
//              },
//              {
//                 stud1:"st3",
//                 age:66
//              },
//              {
//                 stud1:"st4",
//                 age:77
//              },
//              {
//                 stud1:"st5",
//                 age:87
//              },
//              {
//                 stud1:"st6",
//                 age:22
//              }
//         ]
// }
// body.students.forEach(function(el){
//     console.log(el.stud1)
//     console.log(el.age)
// })
//--------------------------------------------------------------------------

// let amol={fName:"rajveer",
// age:2,
// skills:["js","python","java"]
// }
// let {fName:fn,skills:sk,age:ag}=amol
// console.log(fn)
// console.log(sk)
// console.log(ag)

// console.log("---------------------------------------------------")

//  let transactions=[2,43,345,43,446,78,5,225,8776]
//  transactions.reverse()
//  let [tran1,tran2,tran3,tran4,tran5]=transactions.slice(-5)
// //let [tran1,tran2,tran3,tran4,tran5]=transactions.reverse()
// console.log([tran1,tran2,tran3,tran4,tran5])


//Spread Operator---------------------------------------------------

// let num=[33,546,66,53,11,17,657]
// function add(p,q,r,s)
// {
//     console.log(p+q+r+s)
// }
// add(...num)
//------------------------------------------------------------------------------

// let arr=[23,34,55,232,44,7,99999,32]
// function add(a,b,c,d,e)
// {
//    console.log(a+b+c+d+e)
// }
// add(...arr.reverse())

//----------------------------------------------------------------------------

// let arr=[23,34,55,232,44,7,99999,32]
// function add(arr)
// {
//    console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5])
// }
// add(arr.reverse())

//-----------------------------------------------------------------------------------

// // let num1=[34,32645,646,123,47,455]    //we use,when we dont know length or how many elemnts in array
// // function add(arr)
// // {
// //     console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5])
// // }
// // add(...num1)               //when we get nan in terminal,that time we put wrong value,eq.. we put a number instead of letter

// console.log("--------------------------------------------------")


// // rest operarion------------------------------------------------

// // let numbersaa = [33,44,66,77,88,99,100]
// // function add(...a){
// //     return a.reduce(function(acc,el){
// //         return acc + el
// //     })
// // }
// // let ff= add(3443,343,24,12,76,458,87,26,468,2,22,21)
// // console.log(ff)

//--------------------------------------------------------------------------------------------------------
// let arr=[23,34,55,232,44,7,99999,32]
// function taxCollection(...arr)
// {
//    let add=arr.reduce(function(acc,el){
//       return acc+el
//    })
//    let mul=arr.reduce(function(acc,el){
//       return acc*el
//    })
//    return[add,mul]
// }
// let [add,mul]=taxCollection(1221,32,3435,66,33,43,778,57,353)
// console.log(add)
// console.log(mul)

//-------------------------------------------------------------------------------------------------
function taxCollection(...arr){
   let add=arr.reduce(function(acc,el){
      return acc+el
   })
   let add2=arr.reduce(function(acc,el){
        return(acc+el)
   })
return {fName:"rajveer","age":2}
}
let{ fName:fn,age:ag}=taxCollection(1221,32,3435,66,33,43,778,57,353)
console.log(fn)
 console.log(ag)
//--------------------------------------------------------------------------------------------------------

// */ let [student1,student2,student3]=body.data
// let {id,first_name,last_name,email,avatar}=student1 -------eq
//-----------------------------------------------------------------------------------

