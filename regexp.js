// //  https://www.regexpal.com

// //In javascript each and everything is object
// //Define object using class

// class person {
//     constructor(age, firstName) {
//         this.firstName = firstName
//         this.age = age
//     }
//     display() {
//         console.log('my name is ${this.firstName}')
//     }
// }
// let prajakta = new person(25, "prajakta")
// let abhay = new person(19, "abhay")

// console.log(prajakta)
// console.log(abhay)


// //Array(object loop=key)
// let students = new Array
// students[0] = prajakta
// students[1] = abhay

// for (let i = 0; i < students.length; i++) {
//     let obj = students[i]
//     for (let key in obj) {
//         console.log(key, obj[key])
//     }
// }
// console.log("--------------------------------------------------")

// //Regular Expression
// //executes a search for a match in a string,and replaces the matched substringwith a replacement substring

// //let regex1=new RegExp("hello");
// //let regex2= /worlds/;

// let regex1 = /pune/i; //i is case-insensitive search
// let k = "hello i am basically from pune and i love pune"
// let me = k.search(regex1)  //It returns the index of the match,or -1 if the search fails
// console.log(me)

// let regex2 = /pune/g;  //g is global search
// let p = "hello i am basically from pune and i love pune"
// let q = p.match(regex2)  //returns an array or null if no match is found
// console.log(q)

// let regex3 = /pune/gi;
// let r = "hello i am basically from pune and  i love pune"
// let s = r.match(regex3)
// console.log(s)

// let mm = r.replace(regex3, "mumbai") //replaces the matched substring with areplacement substring
// console.log(mm)

// console.log('------------------------------------')

// //^javascript.d$/gim
// //^multi-line string only
// //$ multi-line ends with only
// //[abc][a-z][A-Z][0-9]

// //program 1

// const regEx=new RegExp('abc')
// const h=/pune/  //pattern
// let names=["prajakta-pune","komal-nagar","kajal-mumbai","abhay-pune","rajveer-wakad","vaibhav-pune"]
// console.log(h.test(names[1]))
// console.log(h.test(names[0]))

// let puneS=names.filter(function(el){
//     return h.test(el)
// })
// console.log(puneS)

// // const h=/nagar/  //pattern
// // let nagarS=names.filter(function(el){
// //     return h.test(el)
// // })
// // console.log(nagarS)

// console.log("------------------------------------------------")

// //program 2
// const sr=/^a/
// let names1=["prajakta-pune","komal-nagar","kajal-mumbai","abhay-pune","rajveer-wakad","vaibhav-pune"]
// console.log(sr.test(names1[3]))
// console.log(sr.test(names1[0]))

// let puneS1=names1.filter(function(el){
//     return sr.test(el)
// })
// console.log(puneS1)
// console.log("------------------------------------------------")

// //program 3

// let student=["vaibhav","abhay","aayush","rajveer","ameya"]
// let a=/^.....$/
// let fivechar=student.filter(function(el){
//         return a.test(el)
// })
// console.log(fivechar)
// console.log("------------------------------------------------")

// //program 4

// let namesStudents = ["amol","archit","amit","amey","abhisha",'arman']
// let ba =  /^[a][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)
// console.log("------------------------------------------------")

// // program 5
//  let num=[7709192441,7779898999,9876787665,989676554,7789089089089890]
//  let b=/^[7][7].{8}$/
//  let yy=num.filter(function(el){
//      return b.test(el)
//  })
//  console.log(yy)
//  console.log("------------------------------------------------")

//  //program 6
//  let num1=[7709192441,7779898999,9876787665,989676554,7789089089089890]
// let v=/^[\d][\d].{8}$/
// let vv=num1.filter(function(el){
//      return v.test(el)
// })
// console.log(vv)
// console.log("---------------------------------------------------")

// //program 7

// //\D-[^0-9]
// let num2=[7709192441,7779898999,9876787665,989676554,7789089089089890]
// // // let n=/^[\D][\D].{8}$/
// //let n=/^[\0-9][\0-9].{8}$/
// let nn=num2.filter(function(el){
//     return n.test(el)
// })
// console.log(nn)
// console.log("-----------------------------------------------------")

//-----------------------------------------------------------------------------------------------------------
// //program 8

let namestud=["amol","archit","amit","amey","abhisha","arman"]
let ab=/^[^a-zA-Z0-9_][mr]/    //first letter should be alphabet and remaining letter may be alpha numerical".
let bba=namestud.filter(function(el){    //^^ is equal to not,ives blank array
         return ab.test(el)
})
console.log(bba)
// // console.log("--------------------------------------------------------------")

// // program 9
// // same as this [a-zA-Z0-9]
// let studs=["amol","archit","abhisha","amey","arman"]
// let rr=/^[\a][mr]/
// let rr=/^[\W][mr]/
// let char=studs.filter(function(el){
//     return rr.test(el)
// })
// console.log(char)

// program 10

// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[\W][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)
//--------------------------------------------------------------------------------------------------------

//program 11
// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[a-zA-Z0-9_][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)


//program 12
//same as this [a-zA-Z0-9_]

// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[\w][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)

//program 13. find all capital letters using for loop
// let str="SDagfdKlujHIygPioKJU"
// let regex=/[A-Z]/m

// let capstr=""
// let smallstr=""
// for(let i=0;i<str.length;i++)
// {
//     if(regex.test(str[i]))
//     {
//         capstr=capstr+str[i]
//     }
//     else{
//         smallstr=smallstr+str[i]
//     }
// }
// console.log(capstr)
// console.log(smallstr)

//or
let str="hdggFDFGDVhagdytegTregrEHR"
let regex=/[A-Z]/
let gi=str.split('').filter(function(el,index,array){
    if(regex.test(el)){
      return true
    }
})
console.log(gi.join(''))
