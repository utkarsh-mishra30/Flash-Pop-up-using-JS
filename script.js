// console.log("Hello")
let btnClick = document.getElementById('click')
let container = document.getElementById('container')
let declick = document.getElementById('container')

btnClick.addEventListener('click', ()=>{
    console.log("Clicked")
    container.innerHTML =  `<div class="popupdiv">This is JS Pop-Up div.</br> Click anywhere within the container to close it or press escape key.</div>`
    container.style = `background-color: rgba(0,0,0,0.3);`
    //document.getElementById('container').innerHTML = 'hi';

})

declick.addEventListener('click', ()=>{
    console.log("body Clicked")
    container.innerHTML =  ``
    container.style = `background-color: rgb(161, 158, 255);`
})

document.addEventListener('keydown', (event)=>{

    var name = event.key
    console.log(event.code)
    var name = event.key

    if(name == "Escape"){
        container.innerHTML =  ``
    container.style = `background-color: rgb(161, 158, 255);`
    }
})

