// let counter={
//     count:2,
//     next:function(){
//         console.log(this)             // reffer to the counter=={count:0,next:f}
//          let r=this.count=this.count+1
//          return r
//     }
// }
//  let r=counter.next()
//  console.log(r)
//console.log(this)   //this reffer to the window object==window{window:window,self:window,document:document,name:''location:location,}
//------------------------------------------------------------------------------------------

// alert('hello')      //hello
// window.alert()

// var f = 10
// console.log(window.f)
// console.log(window === this)  //true
// console.log(this)       //this reffer to the window object==window

// var f = 10
// console.log(window.f)

// alert('hello')
// window.alert('hello')

// function movie() {
//     console.log(this === window);
// }
// movie()
// window.movie()

console.log("-----------------------------------------------")



//-----------------------BIND---------------------------------
/* bind() method creates a new function, when invoked, has the this sets to a provided value.
bind() method allows an object to borrow a method from another */

// let bike={
//     brand:'KTM',
//     getBrand:function(){
//         return this.brand
//     }
// }

// let bike2={
//     brand:'KTM2'
// }

// let p=bike.getBrand()   //   undefined because bike reffer to the window objectn there is not defined getbrand method
// console.log(p)

// let q=bike.getBrand.bind(bike2)  
// console.log(q())

/*     // let b=function()
// {
//     return bike2.brand
// }
// bind
// console.log(b())
*/

console.log("-----------------------------------")
//-----------------------------call------------------------------------
/* The call() allows for a function/method 
belonging to one object to be assigned and called for a different object.*/

// var brand="defaultBrand"

// function getCompany(prefix){
//     console.log(prefix+this.brand)
// }
// getCompany('hii hello ')

// let audi={
//     brand:" Audi"
// }

// let BMW={
//     brand:" BMW"
// }

// getCompany.call(audi,'new to')
// getCompany.call(BMW,'new a')

console.log("------------------------------------------------")
//----------------------apply--------------------------------------
/* you can write a method once, and then inherit it in another object,
 without having to rewrite the method for the new object.*/

// getCompany.apply(audi,['new to'])
// getCompany.apply(BMW,['new a'])


// let s=function(){
//     console.log(p+q)
// }
// console.log(s)
// s()

//-----------------------------------------------------------------------------------
// let person=
// {
//     age:12,
//     fullName:"prajakta",
//     display:function(){
//         return [12,13]
//     }
// }
// let [a,b]=person.display()
// console.log(a)
// console.log(b)

// let v=person.display
// console.log(v())

//--------------------------------------------------------------------------------------
// var age=10
// let person={
//     age:12,
//     fullName:"prajakta",
//     display:function(){
//         return this.age
//     }
// }
// let person2={
//     age:25,
//     fullName:"prajakta bahirat",
// }
// console.log(person['age'])

// // let a=person.display()
// // console.log(a)

//  let v=person.display.bind(person2)
//  let va=person.display.bind(person)
//  console.log(v())
//  console.log(va())

//  //-------------------- call and apply
//  console.log(v.call(person2))
//  console.log(va.call(person))

 console.log("----------------------------------------------------")

 person={
     age:12,
     fullName:" abhay",
     display:function(){
         return this.age
     }
 }
 person2={
     age:23,
     fullName:" abhay pable",
 }
//  let r=function(b){
//      return b + this.fullName
//  }
//  let f=r.call(person2,"good morning")
//  let n=r.call(person,"hello")
//  console.log(f)
//  console.log(n)

 //-----------------------------------------------------------------
 let arr=["hii "," hello"]
 let r=function(a,b){
     return [a + this.fullName + b + this.fullName]
 }
 console.log(r.apply(person2,[...arr]))
//console.log(r.apply(person,["hii ","hello"]))

console.log("---------------------------------------------")

// var nam="rajveer"
// let g={
//     nam:"rajveer",
//     age:2,
//     display:function(){
//         console.log("welcome "+this.nam)
//         function greet(){
//             console.log("welcome "+this.nam)   //welcome (undefine)
//         }
//         greet()
//     }
// }
// g.display()

//-----------------------------------------------------------------------------------
console.log("--------------------------------------")
// let g={
//     nam:"rajveer",
//     age:2,
//     display:function(){
//         console.log("welcome "+this.nam)
//         let greet=()=>{
//             console.log("welcome "+this.nam) 
//         }
//         greet()
//     }
// }
// g.display()

console.log("-------------------------------------")

// let g={
//     nam:"komal",
//     age:22,
//     display:()=>{
//         console.log("welcome "+this.nam)
//         let greet=()=>{
//             console.log("welcome "+this.nam) //undefine
//         }
//         greet()
//     }
// }
// g.display()

//arrow function and function expression