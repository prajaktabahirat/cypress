
//conditional statements- are used to perform different actions based on different conditions

//Types of conditional statements
//if
//else
//else if 
//switch

//1) use if to specify a block of code to be executed,if specified condition is true 
//syntax-

//if(condition){
  //  -------------
//}

if(true){
    console.log('hello1')
}

if(false){
    console.log("hello")
}

if(4>6){
    console.log("hello1")
}

//2) if else-use the else element to specify a block of code to be executed if the condition is false
//syntax-
//if(condition)
//{
    // block of code to be executed if the condition is true
//}else{
    // block of code to be executed if the condition is false
//}

Number('5') //5
if(userInput>1 && userInput <=5)
{
    console.log('10 % discount')
}

else(userInput>5 && userInput <=10)
{
    console.log('20 % discount')
}

//3) ELSE IF=use the else if statements to specify a new condition if the first condition is false
//syntax-

//if(condition1)
//{
    // block of code to be executed if the condition is true
//}else if(condition2){
    // block of code to be executed if the condition1 is false and condition2 is true
//}else{
   // block of code to be executed if the condition1 is false and condition2 is false
//}

// let userInput=Number(prompt('please Enter the number of tickets to buy')) //string
// // //Number('5) //5
// if(userInput>1 && userInput<=5){
//     console.log('10 % discount')
// }

// else if(userInput >5 && userInput<=10){
//     console.log('20 % discount')
// }

// else if(userInput>10)
// {
//     console.log('30 % discount')
// }
// else{
//     console.log('Incorrect input')
// }

//-------------------------------------------------------------------------------------

//random guess number
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// let userNInput = Number(prompt('please guess a number between 1 to 5'))
// if (userNInput == randomNumber) {
//     console.log(`you got the correct random number ${randomNumber}`)
// }
// else {
//     console.log(`you got the incorrect random number ${userNInput}`)
// }

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// 2 chance
// let correctGuess = false
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// let userNInput = Number(prompt('please guess a number between 1 to 5'))

// if (userNInput > 5) {
//     if (userNInput == randomNumber) {
//         console.log(`you got the correct random number ${randomNumber}`)
//     }
//     else {
//         console.log(`you got the incorrect random number ${userNInput}`)
//         console.log(`let's try again`)
//         userNInput = Number(prompt('please guess a number between 1 to 5'))
//         if (userNInput == randomNumber) {
//             console.log(`you got the correct random number ${randomNumber}`)
//         }
//         else {
//             console.log(`you got the incorrect random number ${userNInput}`)
//         }
//     }
// } else {
//     console.log('invalid input...!')
//     userNInput = Number(prompt('please guess a number between 1 to 5'))
//     if (userNInput == randomNumber) {
//         console.log(`you got the correct random number ${randomNumber}`)
//     }
//     else {
//         console.log(`you got the incorrect random number ${userNInput}`)
//     }
// }

// function guessNumber() {
//     return Number(prompt('please guess a number between 1 to 5'))
// }
// function checkGuess(userInput) {
//     if (userInput == randomNumber) {
//         correctGuess = false
//     }
// }

// let correctGuess = false
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// let userNInput = guessNumber()

// if (userNInput <= 5) {
//     if (userNInput == randomNumber) {
//         correctGuess = true
//     }
//     else {
//         correctGuess = false
//         console.log(`let's try again`)
//         userNInput = guessNumber()
//         checkGuess(userNInput)
//     }
// } else {
//     console.log('invalid input...!')
//     userNInput = guessNumber()
//     checkGuess(userNInput)
// }
// if (correctGuess) {
//     console.log(`you guess the number correct ${randomNumber}`)
// }
// else {
//     console.log('your guess is incorrect')
//     console.log(`Game over please try`)
// }