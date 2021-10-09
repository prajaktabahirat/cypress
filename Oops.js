//Encapsulation
//Inheritence
//Polymorphism
//Abstraction

//Inheritence-
//extends--parent propertirs and methods i can access on child object
// class Grandfather{
//     constructor(gname,lastname,age){
//         this.gname=gname,
//         this.lastname=lastname,
//         this.age
//     }
//     displayName()
//     {
//         console.log(`my name is${this.gname} and lastName is${this.lastName}`)
//     }
//     // walk(){
//     //     console.log('walk')
//     // }
// }
// class Father extends Grandfather{
//     //if there is no constructor at child level,by default parent constructor will be called and we need to pass arguments
//     displayName(){
//         console.log(this.lastname)
//     }
// }
// let dinkar=new Father("kisan","pabale",75)
// console.log(dinkar.lastname)
// console.log(dinkar.gname)
// //console.log(dinkar.age)
// dinkar.displayName()
// //dinkar.walk()

//---------------------------------------------------------------------------------
// class Grandfather{
//     constructor(gname,lastname,age){
//         this.gname=gname,
//         this.lastname=lastname,
//         this.age
//     }
//     displayName()
//     {
//         console.log(`my name is ${this.gname} and lastName ${this.lastname}`)
//     }
// }
// // let kisan=new Grandfather("kisan","pabale","75")
// // kisan.displayName()


// class Father extends Grandfather{
// constructor(gname,lastname,age,fname,fage)
// {
//     super(gname,lastname,age)
//     this.fname=fname,
//     this.fage=fage
// }
// displayName()
//     {
//         console.log(`my name is ${this.fname} and lastName ${this.lastname}`)
//         super.displayName()
//     }
// }
// // let dinkar=new Father("kisan","pabale",75,"dinkar","54")
// // dinkar.displayName()


// class Son extends Father{
//     constructor(gname,lastname,age,fname,fage,sname,sage)
//     {
//         super(gname,lastname,age,fname,fage)
//         this.sname=sname,
//         this.sage=sage
//     }
//     displayName()
//     {
//         console.log(`my name is ${this.sname} and my lastName ${this.lastname}`)
//         super.displayName()
//     }
// }
// let abhay=new Son("kisan","pabale",75,"dinkar","54","abhay","20")
// abhay.displayName()

//----------------------------------------------------------------------------------
class state{
    constructor(statename,countryname)
    {
        this.statename=statename,
        this.countryname=countryname
    }
    displayAddress()
    {
        console.log(`my state is ${this.statename} and my country is ${this.countryname}`)
    }
}
// let maharashtra=new state("maharashtra","India")
// maharashtra.displayAddress()

class district extends state{
    constructor(statename,countryname,districtname)
    {
        super(statename,countryname)
        this.districtname=districtname
    }
    displayAddress()
    {
     console.log(`my district is ${this.districtname} and my country is ${this.countryname}`)
        super.displayAddress()
    }
}
//     let Pune=new district("maharashtra","India","Pune")
// Pune.displayAddress()

class tal extends district{
    constructor(statename,countryname,districtname,talname)
    {
        super(statename,countryname,districtname)
        this.talname=talname
    }
    displayAddress()
    {
        console.log(`my talname is ${this.talname} and my country is ${this.countryname}`)
        super.displayAddress()
    }
}
let haveli=new tal("maharashtra","India","Pune","haveli")
haveli.displayAddress()

