let button = document.getElementById('button')

let url = document.getElementById('url')
let prog = document.getElementById('prog')
let div = document.getElementById('main-container')

button.addEventListener('click' , function(){
    fetch("https://meme-api.herokuapp.com/gimme").then(res=>{
    return res.json()
    }).then(blob=>{
        let image = document.createElement('img')
        div.appendChild(image)
        image.src = blob.url
        image.style.maxWidth = 400 + "px"
        image.style.maxHeight = 400 + "px"
        
        prog.style.visibility = "hidden"
    })
})