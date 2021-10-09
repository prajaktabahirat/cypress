//let and constant

// let num1=10                     //we can change value and reuse it
// console.log(num1)
// num1=100
// console.log(num1)

//const r=5
//console.log(r)
//r=200               //in const we cant change value
//console.log(r)

 //let names=["prajakta","komal","kajal","abhay"]
// console.log(names[0])
// console.log(names.length)
 //console.log(names[names.length-1])
// console.log(names[2])
// console.log(names[1])
//console.log(names[3])



//  for(let i=0;i<names.length-1;i++)
//  {
//      console.log(names[i])
//  }

// 

// function add(a,b){
// return (a+b)
// }
// let f=add(20,20)
// console.log(f)

//without return method we get undefined
//properties of person=hight,weight,colour   //person-object
//method of person=walk,talk(action)

//methods---action,method return
//let names=["prajakta","komal","kajal","abhay"]
//push=(action)element at the last of array
//return=length of array

/********Push method**********/

// let u=names.push("rajveer")
// console.log(names)
// console.log(u)

/***********pop **********/          //remove elememt at the last of array
// let p=names.pop("rajveer")
// console.log(names)
// console.log(p)

/**********shift*********** */       //remove the first element of array
// let m=names.shift("prajakta")
// console.log(names)
// console.log(m)

/**********unshift*********** */       //add the new element at the start of an array
// let k=names.unshift("rajveer")
// console.log(names)
// console.log(k)

//int x=10.5
//let f=10 //number......f is number 
//let f="rajveer"........f is string 
//let f=true.............f is boolean
//mixed array
//let person=["Prajakta","pabale",true,30]

/**************indexof*********** */

//let fruits=["apple","mango","banana"]

//let a=fruits.indexOf("mango")
//console.log(a)
//let userInput="chikoo"

// if(fruits.indexOf(userInput)>=0)
// {
//     console.log("fruit available")
// }
// else{
//     console.log("fruit not available")
// }

// let userInput="mango"
// if(fruits.indexOf(userInput)>=0)
// {
//     console.log("fruit available")
// }
// else{
//     console.log("fruit not available")
// }

 //let birthYear=[2001,1999,1998,2002]
// let ages=[]
// for(let i=0;i<birthYear.length;i++)
// {
//     let age=2021-birthYear[i]
//     ages.push(age)
// }
// console.log(ages)


//**********map***************------>return[]

// let ages2=birthYear.map(function(el,index,arr)
// {
//     return 2021-el
// })
// console.log(ages2)

// let names=["rajveer","abhay","vaibhav"]
// let t=names.map(function(el,index,arr)
// {
//     return "Er "+el
// })
// console.log(t)

/***************filter*********** */

 //let ages=[12,13,44,15,18,33]
// let sum=0
// for(let i=0;i<ages.length;i++)
// {
//     sum=sum+ages[i]
// }
// console.log(sum/ages.length)

// let gr14=[]
// for(let i=0;i<ages.length;i++)
// {
//     if(ages[i]>14)
//     {
//         gr14.push(ages[i])
//     }
// }
// console.log(gr14)
// let u=ages.filter(function(el,index,arr)
// {
//     return el>14
// })
// console.log(u)


//let n=["raj","om","sairam","vaibhav"]
// let gr4=n.filter(function(el,index,arr)
// {
//     return el.length>4
// })
// console.log(gr4)

//let gr4=n.filter((el,index,arr)=>el.length>4)
//console.log(gr4)

//let gr4=n.filter((el,index,arr)=>el.length>4)
//console.log(gr4)

//for(initialization; conditioncheck; increment or decrement)
//{
  //  statments
//}

//using chain

//let bills=[120,440,550,660,600]

//map
// let h=bills.filter(function(el,index,arr)
// {
//     return el>el*0.10
// })
// console.log(h)

// let rt=bills.filter(function(el)
// {
//     return el>500
// }).map(function(el)
// {
//     return el+el*0.20
// })
// console.log(rt)

/***************reduce*********** */
//let numbers=[1,2,33,44,55,66]
// let sum=0
// for (let i=0;i<numbers.length;i++)
// {
//     console.log(numbers[i])
//     sum=sum+numbers[i]
// }
// console.log(sum)

//reduce--------------single value
// let sum2=numbers.reduce(function(acc,el,index,arr)
// {
//     return acc+el
// },5)
// console.log(sum2)

// let names=["prajakta","bahirat"]
// let fg =names.reduce(function(acc,el)
// {
//     return acc+" "+el

// })
// console.log(fg)

//let transactions=[122,-330,500,700,-899,600]
//[122,500,7000,600] deposit
//[-330,-899]------withdraw

// let withdraw=transactions.filter(function(el)
// {
//     return el<0
//  }).reduce(function(acc,el)
//  {
//      return acc+el
//  })
// console.log(withdraw)

// let deposit=transactions.filter(function(el)
// {
//     return el>0
// }).reduce(function(acc,el)
// {
//     return acc+el
// })
// console.log(deposit)
//-----------------------------------------------------------------------------

// let person=["Prajakta","bahirat",25,40]
// console.log(person[0])
// person[0]="rajveer"
// console.log(person)

//--------objects
// console.log("---")
//  let person={
//     firstName:"Prajakta",
//      lastName:"bahirat",
//      age:25,
//      id:40
//  }

//value fetch-----------object
//------dot notation
//console.log(person.firstName)
//------bracket notation
//console.log(person['firstName'])
//console.log(person.age)
//console.log(person['age'])

//updating the value of an object------------------------
// person.firstName="rajveer"
// console.log(person.firstName)
// console.log(person)

//fetch,update,add
//.dot does work in loops

// for(let key in person)
// {
//     console.log(key,person[key])
// }

//-----object have properties and methods()

// let person=["prajakta","bahirat",34,98]
// console.log(person[0])
// console.log(person[1])
// console.log(person.length)

//-----------object

// let person={
//     firstName:"Prajakta",
//         lastName:"bahirat",
//         age:25,
//         id:40
//     }
    //dot notation or bracket notation
    // console.log(person.firstName)
    // //bracket notation
    // console.log(person['firstName'])
    
    // //*****************update****************************
    // person.firstName="Rajveer"
    // console.log(person)
    // person.language="marati"
    // console.log(person)
    // person['language']="english"
    // console.log(person)

    // for(let key in person)
    // {
    //   console.log(key,person[key])
    // }

    //-------------array and objects
    // let students=[
    //   {
    //     fullName:"prajakta bahirat",
    //     rollNumber:40
    //   },{
    //     fullName:"rajveer bahirat",
    //     rollNumber:50
    //   },
    //   {
    //     fullName:"vaibhav bahirat",
    //     rollNumber:70
    //   }
    // ]
    // console.log(students[0])
    // let a=students[0]
    // console.log(a.fullName)
    // console.log(students[0]['rollNumber'])

    //****************************find************************
    //first occurence
   //let j=students.find(function(el,index,arr)
  //   {
  //  return el.fullName=="prajakta bahirat"
  //  return el.rollNumber==40
   
  //   })
  //   console.log(j)
  //-------------------------
//   let j=students.find(function(el,index,arr)
//   {
//       return el.fullName=="prajakta bahirat"
//       if(index>0)
//       {
//         return el.rollNumber==40
//       }
// })
// console.log(j)
//=-----------------
// let j=students.find(function(el,index,arr)
// {
//   return el.fullName=="prajakta bahirat"
//    if(index==students.length-1)
//    {
//      return el.rollNumber==40
//    }
// })
// console.log(j)
//-------------------------------------

//*****************every some--true/false*****************************

//console.log(6>7)
//<,>,<=,>=,===,!==,==,!
//console.log(6<7 && 7>6)

//every some
//let numbers=[1000,2000,3000,400000,500000]
//let gh=numbers.some(function(el)
 //{
   //return el>=500000
 //})
 //console.log(gh)

//---------------------

//  let pv=numbers.every(function(el)
//  {
//    return el>=2000
//  })
//  console.log(pv)

//---------------------logical

//AND
//TRUE TRUE=TRUE
//TRUE FALSE=FALSE
//FALSE TRUE=FALSE
//FALSE FALSE=FALSE

//OR
//TRUE TRUE=TRUE
//TRUE FALSE=TRUE
//FALSE TRUE=TRUE
//FALSE FALSE=FALSE

//NOT
//TRUE=FALSE
//FALSE=TRUE
// let objOne=students[0]
// console.log(objOne.rollNumber)
// console.log(students[0].rollNumber)
// console.log(students[0]['fullName'])

//********************forEach************************ */

// students=["ram","raj","ramesh"]
// let aa=students.forEach(function(el,index,arr)
// {
//     console.log(`welcome ${el}!`)
// })
// console.log(aa)                 //undifined ..forEach gives undefined

//*****************************Associavity of operation************** */

// let twoD=[[1,2,3],[4,5,6]]
// console.log(twoD[0][0])                     //1
// console.log(twoD[1][twoD[1].length-1])      //6
// let h=twoD.flat()
// console.log(h)                     //[1,2,3,4,5,6]

//**********************sort************** (sort with string working differently*/
// let markss=[-1,0,9,3,2]
// markss.sort()
// console.log(markss)          //[-1,0,2,3,9]

//*************************Spice******************* */

// let names=["one","two","three"]
// let bb=names.splice(1,2,"four","five")
// console.log(names)                      //['one','four','five']

//************************fill*********************** */

//let r=[1,2,3,4,5,6]
//console.log(r.length)           //6
// r.fill("d",2,7)       //6th lastindex
// console.log(r)             //[1,2,'d','d','d','d']

//let j=r.fill('a',2,5)          //end value not included
//console.log(r)                 //[1,2,'a','a','a',6]

//********************concatination**************** */

// let u=[1,2,4]
// let y=[3,4,5]

// let aa=u.concat(y)    //[1,2,4,3,4,5]
// console.log(aa)
// // let bb=y.concat(u)    //[3,4,5,1,2,4]
// //console.log(bb)

//*****************includes  -----boolean********************** */

// let fruits=["apple","mango","chiku"]
// console.log(fruits.includes('banana'))

//**********************join********************** */

// let j=["Rajveer","Bahirat"]
// //let yy=j.join("_")
//  let yy=j.join(" ")
// console.log(typeof yy)
//  //console.log(yy)


