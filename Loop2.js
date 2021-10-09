//function add()
//we can call a function inside a loop

//for(let i=0;i<10;i++){
   // add()
//}

for(let i=0;i<3;i++){
    function add(){
        console.log('Hello')   //print hello 3 times
    }
    add()
}

//we can cal loop inside a function
let p=[3,44,5,6,7,8]
function addTwo(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]+3) //add 3 in each element
    }
}
addTwo(p)

//remove first and last character
let pp="Prajakta"
let vp=""
for(let i=1;i<pp.length-1;i++){
    vp=vp+pp[i]
}
console.log(vp)

//remove first and last character using while loop
let i=1
while(i<pp.length-1){
    vp=vp+pp[i]
    i++
}
console.log(vp)

//Break=In this we use for loop together with the break statement
//syntax=break;
let mk="Prajakta pabale"
for(let i=1;i<mk.length;i++)
{
    if(i==3){
        break;
    }
    console.log(mk[i])
}

//ternary operator=
//the conditional ternary opearator is the only javascript operator
//that takes 3 operands:a condition followed by question mark(?),
//then an expression to execute if the condition is truthy followed by a colon(:),
//after colons expression to execute if the condition is falsy

let fruits=["grapes","banana","apple"]
userInput="banana"
let val=fruits.indexOf(userInput)>1?"fruits is available":"fruits is not available"
console.log(val)

if(fruits.indexOf(userInput)>0)
{
    console.log("fruits is available")
}
else{
    console.log("fruit is not available")
}

//Switch-execute a block of code depending on different case
//break-breaks out of the switch block

let r=["banana","chiku","mango"].filter((el)=>{return el.length>0}).length>0?"hello":"bye"
let a="banana"
switch(a){
    case "chiku":
        console.log('10rs')
        break;   //when we not use break it gives values from a to last(including defalut)

        case "banana":
        console.log('60rs')
        break;

        case "mango":
        case "guava":    
        console.log('90rs')
        break;

        default:
            console.log("Rajveer")

}