//1.reverse string

// let reverse="hello i am prajakta"
// let newstr="";
// for(let i=reverse.length-1;i>=0;i--){
//     newstr+=reverse[i]
// }
// console.log(newstr)

// let rev="hello i am Abhay"
// function reverse1(str)
// {
//     let reversed="";
//     for(let character of str)
//     {
//         reversed=character+reversed;
//     }
//     return reversed;
// }
// console.log(reverse1(rev))
// console.log("---------------------")

//2.AAbhayy remove first and last character

//  let str='AAbhayy'
// let nstr="";
// for(let i=0;i<str.length;i++)
// {
//     if(i !=0 && i !=str.length-1){
//         nstr=nstr+str[i]
//     }
// }
// console.log(nstr)
// console.log("---------------------")

//3.highest and lowest no from array

// let a=[2,54,23,654,-99,0]
// let highest=0
// let lowest=0
// for(let i=0;i<a.length;i++)
// {
//    if (a[i]>highest)
//    {
//        highest=a[i]
//    }
//    else if(a[i]<lowest)
//    {
//        lowest=a[i]
//    }
// }
// console.log(highest)
// console.log(lowest)
// console.log("---------------------")

//4.python.py..extract py 
// let b='python.pdf'
// let c=b.split(".")
// console.log(c[c.length-1])
// console.log("---------------------")

//5.Script.js extract js

// let x="Script.js"
// let y=x.split(".")
// console.log(y[y.length-1])
// console.log("---------------------")

//6.count of owels from given string

// let owels="vaibhav"
// let count=0
// for(let i=0;i<owels.length;i++)
// {
//     if(owels[i]=="a" || owels[i]=="e" || owels[i]=="i" || owels[i]=="o" || owels[i]=="u"){
//         count=count+1
//     }
// }
// console.log(count)
// console.log("---------------------")

//7.[[1,2,5],[4,6,-9],[100,-200,-300]] convert in one array
//  let arr1=[[1,2,5],[4,6,-9],[100,-200,-300]]
// let blank=[]
// for(let i=0;i<arr1.length;i++)
//  {
//     for(j=0;j<arr1[i].length;j++){  
//         blank.push(arr1[i][j])
//     }
//  }
//  console.log(blank)
//  console.log("---------------------")


//8.i am new to javascript and i wish to learn every concept of javascript javascript is great


// let newstr =
//   "I am new to javascript and i wish to learn every concept of javascript . javascript is great";
// let one = newstr.split(" ");

// let count = 0;
// for (let i = 0; i < one.length; i++) {
//   if (one[i].includes("javascript")) {
//     count++;
//   }
// }
// console.log(count);


//9.'aaaabbbccd'

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
// stringCompression('aaaabbbccd')  
// console.log("---------------------")

//10.4a3c2b
// let p="4a3c2b"
// let even =[]
// let odd=[]
// for(let k=0;k<p.length;k++)
// {
//     if(k%2==0)
//     {
//         even.push(p[k])
//     }
//     else{
//         odd.push(p[k])
//     }
// }
// console.log(even)
// console.log(odd)

// newString=""
// for(let k=0;k<even.length;k++)
// {
//     newString=newString+odd[k].repeat(Number(even[k]))
// }
// console.log(newString)
// console.log("---------------------")

//11.reverse number

// let number=[1, 2, 3]
// let revstr=""
// for(let i=0;i<number.length;i++)
// {
//     revstr=number[i]+ revstr
// }
// console.log(revstr)
// console.log("---------------------")

//12.

// let arr=[-1,'abhay',2,'rajveer',0,'vaibhav']
// let number=[]
// let char=[]
// arr.forEach(arr=>{
//     if(typeof arr=='number'){
//         number.push(arr)
//     }
//     else{
//         char.push(arr)
//     }
// })
// let sortednum=number.concat(char)
// console.log(sortednum)
// // let sortechar=char.concat(number)
// // console.log(sortedchar)
// console.log("---------------------")

//let input="abdkahajfadka"
// function letterCounts(s)
// {
//   var result={};
//   s.split('').forEach(function(e)
//   {
//     result[e]={};
//     e.split('').forEach(function(c){
//       if(!result[e][c]){result[e][c]=0;}
//       result[e][c]++;
//     })
    
//   })
//   return result;
// }
// letterCounts('abdkahajfadka');

let h=[12,133,22,54,67,11,98,-34]
let max=h[0]
let min=h[0]

for(let i=0;i<h.length;i++)
{
  if(h[i]>max){
    max=h[i]
  }
  else if(h[i]<min){
    min=h[i]
  }
}
console.log(max,min)
console.log("----------------------------")

let g="ggjdfhggAKghhPHHHrff"
let cal={}
g=g.toLowerCase()
for(let i=0;i<g.length;i++)
{
  if(cal.hasOwnProperty(g[i]))
  {
    cal[g[i]]=cal[g[i]]+1
  }
  else{
    cal[g[i]]=1
  }
}
console.log(cal)
console.log("----------------------------")

let gaa="12456ADGhhjgj8LlkjhJUI@gh*"
let al=0
let num=0
let sc=0
for(let i=0;i<gaa.length;i++)
{
  if(Number(gaa[i]))
  {
    num=num+1
  }
  else if(typeof gaa[i]==="string")
  {
    al=al+1
  }
  else{
    sc=sc+1
  }
}
console.log(al)
console.log(num)
console.log("----------------------------")

let caa="1123AAAghgjyh6576@#hygg!5fgf"
let aaa=0
let nn=0
let ss=0

for(let i=0;i<caa.length;i++)
{
  if(caa[i].charCodeAt()>=48 &&
  
    caa[i].charCodeAt()<=57)
    {
      nn=nn+1
    }
    else if(caa[i].charCodeAt()>=97 && caa[i].charCodeAt()<=122){
      aaa=aaa+1
    }
    else if(caa[i].charCodeAt()>=65 && caa[i].charCodeAt()<=90){
      aaa=aaa+1
    }
    else{
      ss=ss+1
    }
    }
    console.log(nn,aaa,ss)
    console.log("----------------------------")
  
s='AAAAAaC23456cccDDZ'
arr=s.split("")
let number=0
let char=0
arr.forEach(arr=>{
  if(Number(arr)){
    number=number+1
  }
  else{
    char=char+1
  }
})
console.log(number,char)
console.log("----------------------------")

s='a1b2c3d4e5f6g7hh'
abc=s.split('')
num=0
alphabet=0
abc.map((ele,i,arr)=>{
  if(Number(ele))
  {
    num=num+1
  }else{
    alphabet=alphabet+1
  }
})
console.log(num,alphabet)
console.log("----------------------------")

Number("A")
if (undefined){
  console.log("Hello")
}
else{
  console.log('bye')
}
console.log("----------------------")

if (0){
  console.log("Hello")
}
else{
  console.log('bye')
}
console.log("----------------------")

let person={age:23,
namee:'chinmay'}
console.log(person.hasOwnProperty('as'))
console.log("----------------------")

let numbers=[47,87,2,5,43,50,21,89,33]
var highest=0
var lowest=0
for(var i=1;i<numbers.length;i++)
{
  if(numbers[i]>highest){
    highest=numbers[i]
  }else if(numbers[i]<lowest)
  {
    lowest=numbers[i];
  }
}
console.log(`highest number from Array:${highest}`)
console.log(`lowest number from Array:${lowest}`)
console.log("----------------------")

let j=[33,44,55,66,77,88,99]
console.log(j[0])
console.log(j[3])

for(let i=0;i<j.length;i++)
{
  //console.log(i)
  console.log(j[i])
}