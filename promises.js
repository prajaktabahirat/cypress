// let cypressA = new Promise((resolve, reject) => {
//     let r = 4
//     if (r == 10) {
//         resolve('promise is fullfilled')

//     }
//     else {
//         reject('promise not fullfilled')
//     }
// })
// cypressA.then((message)=>{
//     console.log(message)
// }).catch((message)=> { 
//     console.log(message)
// })

// function add(x,y)
// {
//     console.log(`i am added ${x+y}`)
// }
// add(12,13)

let cypressA=new Promise((resolve,reject)=>{
     let info={
        firstName:"prajakta",
        rollNo:30
    }
    let notinfo={
        error:123,
        message:'Check the connection'
    }
    if(info.hasOwnProperty('firstName')) {
        resolve(info)
    }
    else{
        reject(notinfo)
    }
})
cypressA.then((info)=>
{
    console.log(info)
    if(info.hasOwnProperty('firstName')&& info.hasOwnProperty('rollNo')) {
        add(12,13)
    }
}).catch((notinfo)=>{
    console.log(`the error code is ${notinfo.error} and error is ${notinfo.message}`)
})