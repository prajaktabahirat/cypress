
let name0="komal"
// 0  1  2  3  4 
// k  o  m  a  l
console.log(name0[0])
console.log(name0[1])
console.log(name0.length)
//object--property,methods

// let c="komal"
// console.log(c.length)
// console.log(c.toUpperCase())
//method----action
//return----string

// let w="kajal"
// let ww=w.toUpperCase()
// console.log(ww)
// let ee=w.toLowerCase()
// console.log(ee)
// console.log("--------------------------------------------------------")

// 0  1  2  3  4  5
// p  o  o  r  v  a
//-6 -5 -4 -3 -2 -1

// let rr="poorva"
// //string.slice(startingpoint,endpoint)
// //end point not included
// //end point should be ahead start point

// let jj=rr.slice(0,4)
// console.log(jj)

// let nn=rr.slice(3,5)
// console.log(nn)

// let pp=rr.slice(-4,-2)
// console.log(pp)

// let uu=rr.slice(-5,3)
// console.log(uu)

// let uua=rr.slice(-2,3)
// console.log(uua)

// let kkk=rr.slice(4,5)
// console.log(kkk)
// console.log("-------------------------------------------------------------")

// let mm="hemant"
// // 0  1  2  3  4  5  
// // h  e  m  a  n  t
// console.log(mm[0])

// for(let i=0;i<5;i++)
// {
//   console.log(i)
//   console.log(mm[i])
// }
// console.log("-----------------------------------------------------------------")

//  let jlk='prajakta bahirat'
//  //let jlk='chinmay deshpande'
// let count=0
// for(let i=0;i<jlk.length;i++)
// {
//   if(jlk[i]=='a')
//   {
//     count=count+1
//   }
// }
// console.log(count)

// console.log("----------------------------------------------------------------")

// let jlke="prajakta bahirat"
// let count2=0
// for(let i=0;i<jlk.length;i++)
// {
//   if(jlke[i]=='a' || jlke[i]=='e' || jlke[i]=='i' || jlke[i]=='o' || jlke[i]=='u')
//   {
//     count2=count2+1
//   }
// }
// console.log(count2)
// console.log("------------------------------------------------------------------")

// let na="vaibhav"
// let rev=""
// for(let i=6;i>=0;i--)
// {
//   console.log(na[i])
//   rev=rev+na[i]
// }
// console.log(rev)

// console.log("---------------------------------------------------------------------")

// let ja="abhay"
// console.log(ja[0].toUpperCase()+ja.slice(1,ja.length))

//person--
//hight,weight,age
//walk(),talk()
//properties-
//wheel,reg,color
//action start() stop()





// console.log("--------------------------------------------------")
// let first="Abhay"
// console.log(first.length)

// //object--properties and methods
// // 0  1  2  3  4  
// // a  b  h  a  y

// console.log(first[0])
// console.log(first[first.length-1])

// for(let i=0;i<5;i++){
//    //console.log(i)
//    console.log(first[i])
// }
// console.log("--------------------------------------------------")
//  for(let i=first.length-1;i>=0;i--)
//  {
//    //  console.log(i)
//    console.log(first[i])
//  }
//  console.log("--------------------------------------------------")

//  //method
//  //method---Action,return

//  console.log("Hello I am new to javascript")
//  console.log('Hello I am new to javascript')
//  console.log("Hello I am 'new' to javascript")
//  console.log('Hello I am "new" to javascript')
//  console.log("--------------------------------------------------")

//  //old way
// let namee="prajakta"
// let surname="bahirat"
// console.log("My firstname is" + namee + "My lastname is" + surname)
// console.log("--------------------------------------------------")

// //string interpolation-back ticks
// console.log(`my firstname is ${namee} and my lastname is ${surname}`)

// //it also solves the expression
// console.log(`Addition of 2 and 2 is ${2+2}`)

// console.log("-------------------------------------------------")

// //String
// //string+string-->string
// //string+number-->string
// //number+string-->string
// //number+number-->number

// let p=20
// let q=30
// let r="Rajveer"
// console.log(p+q+r)
// console.log(q+r+p)
// console.log(p+q)

// console.log("-------------------------------------------------")

// //methods

// function add(x,y)
// {
//     return x+y
// }
// let d=add(10,20)
// console.log(d)
// console.log(typeof d)
// console.log("-------------------------------------------------")

// //user defined function and inbuilt functions

// let k=console.log('Hello')
// //console.log(k)

// //Action-printing to console whatever we pass
// //return type
// //methods

// let fruit1="Grapes"
// console.log(typeof fruit1)

// let upper=fruit1.toUpperCase()
// //Action-convert to uppercase
// //Return type-string
// console.log(upper)
// console.log(typeof upper)

// let lower=fruit1.toLowerCase()
// //Action-convert to lowercase
// //Return type-string
// console.log(lower)
// console.log(typeof lower)

// //method chaining
// let no=fruit1.toLowerCase().toUpperCase().length
// console.log(no)
// console.log(typeof no)
// console.log("------------------------------------------------------------")

// let aa="rajveer"
// // 0  1  2  3  4  5  6  
// // r  a  j  v  e  e  r
// //-7 -6 -5 -4 -3 -2 -1
// //aa.slice(startingPosition,endPosition)

// let abc=aa.slice(1,6)
// console.log(abc)
//  console.log(aa.slice(2))
//  console.log(aa.slice(-3))
//  console.log(aa.slice(-5,6))
//  console.log(aa.slice(-3,-4))   //first value should greater than second value
//  console.log("------------------------------------------------------------------")

//  let y="abhay"
//  console.log(y[0].toUpperCase()+y.slice(1))

//  let capitalize=""
//  for(let i=0;i<y.length;i++)
//  {
//    if(i==0)
//    {
//      capitalize=capitalize+y[i].toUpperCase()
//    }
//  else{
//    capitalize=capitalize+y[i]
//  }
//  }
//  console.log(capitalize)

//include
// let userFruit="Apple".toLowerCase()
// let fruit="apple banana mango grapes chiku"

// if(fruit.includes(userFruit))
// {
//     console.log('Fruit Available')
// }
// else{
//     console.log("Fruit not available")
// }
// console.log('------------------------------------------------')

// let flower=" rose lily "
// console.log(flower.length)
// console.log(flower.trim().length)
// console.log('------------------------------------------------')

// let flower1=" rose lily "
// console.log(flower1.length)
// console.log(flower1.trimRight().length)
// console.log('------------------------------------------------')

// let flower2=" rose lily "
// console.log(flower2.length)
// console.log(flower2.trimLeft().length)
// console.log('------------------------------------------------')

// let n=" Rajveer bahirat "
// console.log(n.trim())
// console.log('------------------------------------------------')

// console.log(n.trim().split(' '))
// console.log('------------------------------------------------')

// console.log(n.trim().split(' ').join(""))
// console.log('------------------------------------------------')

// let lang="i am learning javascript"
// let aa=lang.replace('javascript','python')
// console.log(aa)

// let lang2="i am learning javascript and i will search job in javascript"
// let bb=lang2.replace('javascript','python')
// console.log(bb)
//  lang2=lang2.split(' ')
//  console.log(lang2)

//  for(let i=0;i<lang2.length;i++)
//  {
//      if(lang2[i]==="javascript")
//      {
//          lang2[i]="python"
//      }
//  }
//  console.log(lang2.join(' '))
