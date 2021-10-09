

//1.setting the properties using the function

// let amol=new person()
// amol.setAge(20)
// console.log(amol.age)

// let rahul=new person()
// rahul.setAge(34)
// console.log(rahul)
// console.log(amol)

//2.setting the object properties outside the class

// let amol=new person()
// amol.age=20
// amol.roll=30
// amol.fullName="amol rao"
// console.log(amol)

// // //using bracket notation--------------------------------------------
// amol['age']=20
// amol['roll']=30
// amol['fullName']="amol rao"
// console.log(amol)

// let amol={
//     age:30,
//     roll:34,
//     fullName:"amol"
// }
// let abhay=new person()
// let vaibhav=new person()
// let prajakta=new person()
// let komal=new person()
// let kajal=new person()

// console.log(komal.age)

//3.setting the object properties inside the function

// class person{
//     age=null
//     roll=null
//     fullName=null

//     setAge(a)
//     {
//         this.age=a
//     }

// setRoll(rollno)
// {
//     this.roll=rollno
// }

// fullName(name)
// {
//     this.fullName=name
// }
// }

//4.setting the object properties using constructor
class Person{
    constructor(fullName,age,rollno){
        this.fname=fullName,
        this.ageNo=age,
        this.rollNo=rollno
    }
}
let amol=new Person("amol",23,43)
let abhay=new Person("abhay",25,24)
let komal=new Person("komal",73,93)

let students=[amol,abhay,komal]
let sum=0
for(let i=0;i<students.length;i++)
{
    //console.log(students[i])
    sum=sum+students[i].ageNo
}
console.log(sum/students.length)


//----------------------18-8-21-----------------------------------------------------------------------

// class person{
//     age=null
//     rollNo=null
//     constructor(a,r){
//         this.age=a
//         this.rollNo=r
//     }
//     setAge(a){
//         this.age=a
//     }
//     setrollNo(r){
//         this.rollNo=r
//     }
// }

// //using constructor------------------------------------

// let abhay=new person(20,12)
// console.log(abhay.age)
// console.log(abhay.rollNo)

// //using set and get function---------------------------

// let komal=new person()
// komal.setAge(21)
// komal.setrollNo(88)
// console.log(komal)

// //outside the class------------------------------------

// let kajal=new person()
// kajal.age=22
// kajal.rollNo=76
// console.log(kajal.age)
// console.log(kajal.rollNo)
// console.log(kajal)
// //---------------------or type--------

// let prajakta=new person()
// prajakta['age']=26
// prajakta['rollNo']=40
// console.log(prajakta) 

// class Bank {
//     constructor(name, accountNo, bal) {
//         this.fullName = name,
//             this.accNo = accountNo,
//             this.transactions = []
//         this.bal = bal
//     }
//     deposit(amount) {
//         this.transactions.push(amount)
//         this.bal = this.bal + amount
//         console.log(`the amount of ${amount} added to your account`)
//         console.log(`your current bal is ${this.bal}`)
//         return this.bal
//     }
//     withdraw(amount) {
//         if (amount < this.bal) {
//             this.transactions.push(-amount)
//             this.bal = this.bal - amount
//             console.log(`the amount of ${amount} deducted from your account`)
//             console.log(`your current bal is ${this.bal}`)
//             return
//         }
//         else {
//             console.log('insufficient bal to withdraw')
//         }
//     }
// }

// let vaibhav = new Bank("vaibhav", 20, 200)
// vaibhav.deposit(2000)
// vaibhav.withdraw(800)
// vaibhav.deposit(6000)
// vaibhav.withdraw(1000)
// vaibhav.deposit(5000)
// vaibhav.withdraw(600)
// vaibhav.deposit(9000)
// vaibhav.withdraw(3600)

// console.log(vaibhav.transactions)

// //total deposit
// let totaldeposit = vaibhav.transactions.filter(function (el) {
//     return el > 0
// }).reduce(function (acc, el) {
//     return acc + el
// })
// console.log(`Total deposit amount ${totaldeposit}`)

// //total withdraw
// let totalwithdraw = vaibhav.transactions.filter(function (el) {
//     return el < 0
// }).reduce(function (acc, el) {
//     return acc + el
// })
// console.log(`Total withdraw amount ${totalwithdraw}`)

// //total transaction
// let totaltransaction=vaibhav.transactions.reduce(function(acc,el)
// {
//     return acc+el
// })
// console.log(`Total transaction amount ${totaltransaction}`)

// //last five transactions
// console.log(vaibhav.transactions)
// let last5tran=vaibhav.transactions.slice(-5);
// console.log(last5tran)


