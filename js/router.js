function changeRouteHash(newHash){
    console.log(window.location.hash)
    window.location.hash = newHash
}

function handleButtonDiv(e){
    e.preventDefault()
    console.log(e.target.type)
    if (e.target.type === "button") {
        changeRouteHash(`${e.target.dataset.hash}`)
    }
}

function mountButtonHashListener(){
    const element = document.getElementsByClassName("buttons")[0]
    console.log(element)
    element.addEventListener("click", handleButtonDiv)
    
}
