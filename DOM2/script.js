//we can find element with id,class,attribute,tagname
// id is always unique
//class having multiple elements same properties

let headingOne=document.querySelector('h1')

let element=document.querySelector('#newId')
console.log(element)
let elementTwo=document.querySelector('.newClass')
console.log(elementTwo)

//for add new button=<button name "addbutton">add</button>
//tagname[attribute="value"]

let buttonButton=document.querySelector('button(name="addButton")')
console.log(buttonButton)
//<input type ="text">

let inputText=document.querySelector('input[type="text"]')
console.log(inputText)

//<h1>hello</h1>

buttonButton.addEventListener('click',function(){
    elementTwo.textcontent=inputText.value
    elementTwo.style.color=inputText.value
})