//selecting element based on id and class

let listClassGreen=document.querySelectorAll(".greenColor")
console.log(listClassGreen)
for(let i=0;i<listClassGreen.length;i++)
{
    listClassGreen[i].style.color="orange"
    listClassGreen[i].style.background="yellow"
}
//-------------------------------------------------------------------------------

let purpleColor=document.querySelector('#purpleColor')
purpleColor.style.color="blue"