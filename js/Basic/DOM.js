const content = document.createElement("div")

const title = document.createElement("h1")
const text = document.createElement("p")

const toggleButton = document.createElement("button")
const appendedChild = document.createElement('h1')

const promptButton = document.createElement("button")

const removeButton = document.createElement("button")

title.textContent = 'Hello World!'
text.textContent = 'This is a paragraph.'
toggleButton.textContent = 'Toggle visibility'
promptButton.textContent = 'Do magic'
removeButton.textContent = 'Remove child'

text.addEventListener("mouseenter", () => {
  text.style.backgroundColor = "red"
})

text.addEventListener("mouseleave", () => {
  text.style.backgroundColor = "white"
})

title.addEventListener("mouseenter", () => {
  alert("Hello!")
})

// Toggle Button
let toggled = false
appendedChild.textContent = "Appended Child"
appendedChild.style.visibility = "hidden"

toggleButton.addEventListener("click", () => {
  if (toggled == false) {
    appendedChild.style.visibility = "visible"

    toggled = true
  } else {
    appendedChild.style.visibility = "hidden"

    toggled = false
  }
})

// Prompt button
promptButton.addEventListener("click", () => {
  let buffer = prompt("Type somehitng!")

  appendedChild.textContent = buffer
})

// Prompt button
const tempElement = document.createElement('h1')
tempElement.textContent = "Hidup Jokowi"
appendedChild.append(tempElement)

removeButton.addEventListener("click", () => {
  appendedChild.removeChild(tempElement)
})

content.append(title, text, toggleButton, promptButton, removeButton)

document.body.append(content)
document.writeln("</br>")
document.body.append(appendedChild)

