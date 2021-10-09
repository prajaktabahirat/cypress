//Loops iteration

//for loop,while loop, dowhile loop

//for

//for([initialization];[conditioncheck];[increment/decrement]){

//}

// for(let i=0;i<10;i++){
//     console.log(i)
// }

let i = 0;
for (; i < 10;) {
    console.log(i) ///0-10
    i++  //i--10
}
console.log(i)

for (let i = 10; i >= 0; i--) {
    console.log(i)     //10-0
}

let k = 'abhay'
let a = ""
let b = ""
for (let i = 0; i < k.length; i++) {
    a = k[i] + a   //yahba
}
for (let i = k.length - 1; i >= 0; i--) {
    b = b + k[i]
}
console.log(a)
console.log(b)
//-------------------------------------------------------------------------------

// let r = [2, 3, 2, 44, 55, 66, 55, 3, 66]
// let rk = []
// let du = []

// //1st iteration
// for (let x = 0; x < r.length; x++) {
//     if (rk.indexOf(r[x]) < 0) {
//         rk.push(r[x])
//     }
//     else {
//         du.push(r[x])
//     }
// }

// for (let i = 0; i < r.length; i++) {
//     if (!rk.includes(r[i])) {
//         rk.push(r[i])
//     }
//     else {
//         du.push(r[i])
//     }
// }
// console.log(du)
// console.log(rk)

// let ia = "prajakta bahirat is learning javascript"
// let count = 0
// for (let i = 0; i < ia.length; i++) {
//     if (ia[i] == " ") {
//         count = count + 1
//     }
// }
// console.log(count)
// console.log("prajakta bahirat is learning javascript".split(' ').length - 1)

// //--------------------------------------------------------------------------------------
// //reverse string
// hn = "prajakta bahirat is learning javascript"
// a = ""
// for (let i = 0; i < hn.length; i++) {
//     a = hn[i] + a
// }
// console.log(a)
// //-----------------------------------------------------------------------------------------

// //while loop
// let iaa = 0
// while (iaa <= 10) {
//     console.log(iaa)  // 0 1
//     iaa = iaa + 1
// }

//random number----->while loop
//break and continue
// for (let i = 0; i < 10; i++) {
//     console.log(i)

//     if (i == 3) {   //0-3
//         break;
//     }
// }

// for (let i = 0; i < 10;) {
//     console.log(i)

//     if (i == 3) {   //0-3
//         continue;
//     }
//     i++
// }

// for (let i = 0; i < 10;) {
//     i++;   //1   //2
//     if (i == 3) {   //0-3
//         continue;
//     }

//     console.log(i)
//-------------------------------------------------------------------------------------------------

//while
//initialization

//while(condition)
//{
//statements
//increment/decrement
//}

// let h=10
// while(h>=0)
// {
//     console.log(h)
//     h--
// }
//}

// let randomNumber = Math.floor(Math.random() * 5) + 1    //3
// let userInput = Number(prompt(`enter the number between 1 to 6`))   //2

// while (randomNumber !== userInput) {
//     userInput = Number(prompt(`enter the number between 1 to 6`))    //3
// }


// let randomNumber = Math.floor(Math.random() * 5) + 1    //3
// let userInput = Number(prompt('enter the number between 1 to 6'))   //2
// let y = 2
// let guessNumber = false
// while (y > 0) {
//     userInput = Number(prompt('enter the number between 1 to 6'))    //3
//     if (randomNumber == userInput) {
//         guessNumber = true
//         break;
//     }
//     userInput = Number(prompt('Enter the number betwen 1 to 6'))
//     y--

// }

// if (guessNumber) {
//     document.write('you guess the correct')
// }
// else {
//     document.write('incorrect guess')
// }

// let randomNumber = Math.floor(Math.random() * 5) + 1  //3
// //let userInput=Number(prompt('Enter the number betwen 1 to 6'))

// let y = 5
// let guessNumber = false

// while (y > 0) {
//     let userInput = Number(prompt('Enter the number betwen 1 to 6'))
//     if (randomNumber == userInput) {
//         guessNumber = truebreak;
//     }
//     //   userInput=Number(prompt('Enter the number betwen 1 to 6'))   //1
//     y--
//     alert(`Number of guess remaining ${y}`)
// }

// if (guessNumber) {
//     document.write('you guess the correct')
// }
// else {
//     document.write('incorrect guess')
// }
//------------------------------------------------------------------------------------------------

// let even=1
// while(even<=50)
// {
//     if(even % 2==0){
//         document.write(`Even number:${even}</br>`)
//     }
//     even++
// }

// let odd = 1
// while (odd <= 50) {
//     if (odd % 2 != 0) {
//         document.write(`Odd number:${odd} </br>`)
//     }
//     odd++
// }

//first 10 odd numbers
// let count=0
// let odd=1

// while(odd<=50)
// {
//     if(odd % 2!=0){
//         document.write(`Even number:${odd}</br>`)
//         count=count+1
//         if(count==10){
//             break
//         }
//     }
//     odd++
// }

//ternary operator
//ternary operator-->2 condition
//age>18 --you can drive,you cant drive

let age=27
let drive=false
if(age>18){
    drive=true
}
else{
    drive=false
}
drive=age>18 ? true:false
if(drive){
    console.log('you can drive')
}
else{
    console.log('you can not drive')
}
drive=age>18?"hello you can drive":"you can not drive"
console.log(drive)


//random number----->while loop

//[2,3,2,44,55,66,55,3,66].filter(function(el,index,arr){
//})

let chars=[33,55,33,22,45,33,55,33,33]
let uniqueChars=chars.filter((el,index)=>{
    return chars.indexOf(el)>index;
})
console.log(uniqueChars)