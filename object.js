// let person2={
//     firstName:"prajakta",
//     lastName:"bahirat",
//     age:12,
//     rollno:22

// }

// //dot notation-(object.propertyname)
// //bracket notation-object['firstname']

// //fetching the value from an object

// console.log(person2.firstName)     //prajakta
// console.log(person2['age'])        //12

// //updating the value from an object

// person2.firstName="vaibhav"
//   //person2['firstName']="Rajveer"
// console.log(person2)

// //Adding property to object

// person2.language="marathi"
//     //person2['language']="hindi"
// console.log(person2)

// //---------------Array-------------

// let h=[1,2,3,4,5]
// for(let i=0;i<h.length;i++)
// {
//     console.log(i)
//     console.log(h[i])
// }
//-------------------------------------------

// let person2={
//     firstName:"prajakta",
//     lastName:"bahirat",
//     age:12,
//     rollno:22,
//     colour:"fair",
//     height:5,
//     weight:40
// }
// console.log(person2['rollno'])
//   //dot notation does work in loops

//   for(let key in person2)
//   {
//       console.log(key,person2[key])
//   }

//   //delete is used to delete some property

//   delete person2.lastName
//   console.log(person2)

//   //function------------------------------
//   let j=[1,2,3,4,5,6]

//   function printArr(arr)
//   {
//       //let arr=j
//       arr[0]=56
//       console.log(arr)        //56 2 3 4 5 6
//   }
//   printArr(j)                 //56 2 3 4 5 6
//   //console.log(j)            //56 2 3 4 5 6

//----------------------------------------------

//   let x=10
//   function printX(y)
//   {
//       y=30
//       console.log(y)             //30
//       console.log(x)             //10
//   }
//   //printX(x)                     //  30   10
//   console.log(x)               //   10

//---------------------------------------------

// let persond = {
//     namee: "Vaibhav",
//     age: 2
// }
// function printObj(obj2) {
//     obj2.namee = "Rajveer"
//     console.log(obj2)
// }
// console.log(persond)
// printObj(persond)                 //namee:'Rajveer',age:2
//   //console.log(persond)           //namee:'vaibhav',age:2

  let students=[
    {
        firstName:"rajveer",
        age:2,
        skills:["python","JS","css","jquery"]
    },
    {
        firstName:"vaibhav",
        age:32,
        skills:["python","JS","css"]
    },
    {
        firstName:"prajakta",
        age:25,
        skills:["python","JS"]
    }
]
//console.log(students[0]['firstName'])
//console.log(students[2]['firstName'])
//console.log(students[2]['skills'].length)


// for(let i=0;i<students.length;i++)
// {
//     if(students[i].age<25){
//         console.log(students[i].firstName)
//     }
// }

//average age of all students----------------
// let sum=0
// 
// {
//     sum=students[i].age+sum
// }
// console.log(sum/students.length)

//name with skills----------------
// for(let i=0;i<students.length;i++)
// {
//     console.log(`${students[i].firstName}: ${students[i].skills.length}`) 
// }

//name the person with python skill------------
// for(let i=0;i<students.length;i++)
// {
//     if(students[i].skills.indexOf("python")>=0){
//         console.log(students[i].firstName)
//     }
// }

// let firstName="rajveer"
// let lastName="bahirat"
// console.log(`my first name is ${firstName} and my last name is ${lastName}`)

 /*eq of array 
 let y=[1,23,33]

for(let i=0;i<y.length;i++)
{
    console.log(i)
    console.log(y[i])
}
*/

// let person3={
//     firstName:"Ram",
//     age:23
// }
// for(let key in person3)
// {
//     console.log(key,person3[key])
// }

// class person {
// fullName=null
// age=null
// rollNumber=null
// }

//  let amol=new person()
// //console.log(amol)
//  amol.age=23
//   console.log(amol)

// let rajveer=new person()
// console.log(rajveer)
// rajveer.language="english"
// console.log(rajveer)






// let rajveer
// {
//     fullName:null,
//     age:null,
//     rollNumber:null;
// }

// let abhay
// {
//     fullName:null,
//     age:null,
//     rollNumber:null;
// }
//}

//-----------------------------------------------------------------------------------------------------------
// let abhay={
//     'fullname':"abhay pable",
//     'age':20,
//     'talk':function()
//     {
//         console.log('hello '+this.fullName)
//     }
// }
// console.log(abhay.age)
// abhay.talk()

// let rajveer={
//     'fullName':"rajveer bahirat",
//     'age':2,
//     'talk':function()
//     {
//         console.log('hello '+ this.fullName)
//     }
// }
// rajveer.talk()

//------------------------------------------------------------------------------------------------------------
// let x=10
// function add(){
//     x=30
//     console.log(x)
//     x=40
//     console.log(x)
// }
// add()
// console.log(x)

//difference between let,const and var

//program 1
// var x=10
// console.log(x)
// {
//     console.log(x)
// }

//program 2
// {
//     var x=10
//     console.log(x)
// }
// console.log(x)

//program 3
//variable defined with let keyword is blocked scop
// {
//     let x=10
//     console.log(x)
// }
// console.log(x)

//program 4
// {
//     const x=10
//     console.log(x)
// }
// console.log(x)

//let and const are blocked scope and var is function scoped
//program 5
// let d=10
// {
//     d=30
//     console.log(d)
// }
// console.log(d)

//program 6
// const r=50;
// {
//     const r=10
//     console.log(r)
// }
// console.log(r)

//program 7
// var f=10
// function add()
// {
//     var f=30
//     console.log(f)
// }
// console.log(f)
// add()

//program 8
// var f=10
// function add(){
//     f=30
//     console.log(f)
// }
// console.log(f)
// add()

//program 9
// let d=400
// var f=10
// function add(){
// let d=30
// f=30
// console.log(f)
// {
//     let d=45
//     console.log(d)
// }
// d=70
// {
//     console.log(d)
// }
// }
// console.log(f)
// add()
// console.log(d)

