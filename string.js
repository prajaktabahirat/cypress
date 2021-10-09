
//---------------------------------string--------------

//number,boolean,string,array,objects

//let fullName="prajakta"
//console.log(typeof fullName)

//string stores the value by index
// console.log(fullName[0])
// console.log(fullName.length)
// console.log(fullName[fullName.length-1])

//property-------objects
// for(let i=0;i<fullName.length;i++)
// {
//   console.log(i)
//   console.log(fullName[i])
// }

// for(let i=fullName.length-1;i>=0;i--){
// console.log(fullName[i])
// }

//---------------------------------string
//let firstName="prajakta"
//console.log(firstName)

// //we can also write- console.log("prajakta"))/console.log('prajakta')
//console.log("chinmay,s book")
//console.log('rajveer loves "javascript"')


//---------------concatination

//console.log('my first name is'+""+firstName)

//-----------------------------------string interpolation---------------------------

//console.log(`my firstname is ${firstname}`)
//console.log(`my first name is${8+9}`)

//-------------conversion---------------------------

// let firstName="Prajakta"
//      let age=25
//      let rollNumber=40
//   console.log(rollNumber+firstName+age)
//   console.log(rollNumber+age+firstName)
//   console.log(firstName+rollNumber+age)

// Number+String=string
//Number+Number=Number
//String+Number=Number
//String+String=String

//----------------methods does 1.action & 2.return

// -----------toUpperCase
//let language="Marathi"
// let upper=language.toLocaleUpperCase()
// console.log(upper)

//-----------toLowerCase
//let h=language.toLowerCase().toLocaleUpperCase().length
//console.log(h)

//action=uppercase/lowercase
//string----
//--------------------------------Starts with
////starts with and end with javascript(also work with substrings)

// let lastName="bahirat"
// let checkstart=
// lastName.startsWith('b')    //should have b ....javascript is case sensitive
// console.log(checkstart)

// let checkend=
// lastName.endsWith('at')    //substring
// console.log(checkend)

//---------------------------include-------------

// let sister="komal"
// console.log(sister.includes('ma'))

////serach fruit(webapplication)--90% string automation

// let fruits="apple banana mango grapes chiku"
// let userInput="mango"
// if(fruits.includes(userInput))
// {
//     console.log('Fruit available')
// }
// else{
//     console.log('Fruit not available')
// }

//recast/login.in---before login
//recast/dashboard--after login
//cy.url--recast/dashboard

//-----------------------------------slice---------------

 //0  1  2  3  4  5  6  
// c  h  i  n  m  a  y
//-7 -6 -5 -4 -3 -2 -1

 //let month="chinmay"
// console.log(month[-1])       //without return get undefined 
// let n=month.slice(4,7)    //end value is not included
// console.log(typeof n)
// console.log(n.toLowerCase())

// console.log(month.slice(-5,-1))    //inma
// console.log(month.slice(-1,-6))     
// console.log(month.slice(3,-2))      // nm
// //note-starting position should be before ending position
// console.log(month.slice(-3))

//--------------------------substring-----------------------
//  let homeAddres='Gardenia society'
//  let substring=homeAddres.substring(7,-1)
//  console.log(substring)

 //string+string----->string

 //---------------------reversed------------------

//  let newName="prajakta"
//  let reversedString=""
//  for(let i=7;i>=0;i--)
//  {
//      //reversedString=newName[i]+reversedString //get same string
//      reversedString=reversedString+newName[i]     //reverse string
//  }
// console.log(reversedString)

//count of owels in string

// let newName="chinmay"
// let count=0
// for(let i=0;i<newName.length;i++)
// {
//     if(newName[i]=="a" || newName[i]=="e" || newName[i]=="i" || newName[i]=="o" || newName[i]=="u"){
//         count=count+1
//     }
// }
// console.log(count)

// ----------------------------------------------------------------------

// let firstNameNew="prajakta pabale"
// let hh=firstNameNew.substr(4,4)
// console.log(hh.length)

//---------------


// let ba=["vaibhav","kajal","komal","abhay"]
// let gg=ba.filter(function(el){
//     return el.length<6
// })
// console.log(gg)

//-------------------------

//let b=["vaibhav:7665764344","kajal:4325564320","komal:7643258963"]

////using for loop

// let mob=[]

// for(let i=0;i<b.length;i++)
// {
//     mob.push(b[i].substr(-11))   //':68787387976'---
// }
// console.log(mob)

////using map
// let yy=b.map((el)=>{
//     return el.substr(-10)
// })
// console.log(yy)

//-----------------------------trim---------------------------

// let newFirstName="prajakta bahirat"        //if n is N then it is camelcase
// let trimmed=newFirstName.trim()
// console.log(trimmed.length)
// console.log(newFirstName.length)
// console.log(trimmed)

//------------------------------replace---------------------------------------------------------------------

//  let city = [
//     "I live in Pune city I live in Bombay",
//   "I live in Pune city I live in Nagpur"
// ]

// let updatedCity = []

//  // //let cityName = city.replace("Pune","nagpur")
//  // //console.log(cityName)

// for(let i = 0 ; i < city.length ; i++){
//     if(city[i].includes('Bombay')){
//         updatedCity.push(city[i].replace('Bombay','Mumbai')) 
//     }
//     else if(city[i].includes('Nagpur')){
//         updatedCity.push(city[i].replace('Nagpur','Wardha')) 
//     }
// }
// console.log(updatedCity)

//eq-----------------------------------
// let p='JS will,JS will rocks you!'
// let vp=p.replace('JS','JAVASCRIPT')
// console.log(vp);

//eq----------------------
// let per='i am prajakta,i am kajal'
// let vp=per.replace('prajakta','komal')
// console.log(vp);


//-----------------------------------------------------------------------------------------------------

//----------------------------charAt-------------------------

// let ha="prajakta"
// let j=ha.charAt(2)
// console.log(j)

//------------------------------charCodeAt------------------------------------------------

// let hd="rajveer"
// let aa=hd.charCodeAt(6)
// console.log(aa)

//-------------------------------------split-------------------------------
// console.log('6'==6)
// console.log('6'===6)

// let uu=yy.split("")
// console.log(uu)

//let bb="chinmay:6775656546"
// console.log(bb.split(":"))

////------let fullNameSplit="prajakta bahirat"
////console.log(`Welcome ${fullNameSplit.split("")[0]}!`)

//----------------------------padStart---------------------

// let bb="rajveer:6775656546"
// console.log("6775656546".padStart(14,"+91 "))

// let a="77655"
// console.log("77655".padStart(8,"00"))             //00077655

//----------------------------padEnd---------------------

// let bb="rajveer:6775656546"
// console.log("6775656546".padEnd(14,"+91 "))

// let a="77655"
// console.log("77655".padEnd(8,"000"))         //77655000


















// -----------------------//let c="a4b2"  //aaaabb
// //let stringCompression='aaaabbbcc'
// function stringCompression(string)
// {
//     var output='';
//     var count=0;
//     for(var i=0;i<string.length;i++)
//     {
//         count++;
//         if(string[i] !=string[i+1])
//         {
//             output+=string[i]+count
//             count=0;
//         }
//     }
//     console.log(output)
// }
// stringCompression('aaaabbbcc')     //a4b3c2

// //let c="a4b2"    //aaaabb