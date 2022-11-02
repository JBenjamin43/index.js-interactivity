
// STEP 1: Grab our HTML element

// STEP 2: Write our function

// STEP 3: Combine steps 1 and 2 using and event listener
const message = document.querySelector("#message") 

const addButton = document.querySelector('form')

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle =document.createElement("span")
    
    movieTitle.addEventListener("click", crossOffMovie)

    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    document.querySelector("ul").appendChild(movie)
    inputField.value = ""

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted"
} 

addButton.addEventListener("submit", addMovie)

function crossOffMovie(event) {
    event.target.classList.toggle("checked") 

    if(event.target.classList.contains("checked") === true) {
        message.textContent = "movie watched"
    }else {
        message.textContent = "movie added back"
    }
}
