// a generic event handler
const eventHandler = (event) => console.log(event);

// register an event listener on a button
const button = document.querySelector('button')
const mouseArea = document.querySelector('#mouse-area');

// TODO:
// add a 'click' handler for the button
  //addEventListener is a higher order method
    //-takes in an event name (written as a string) and a callback function

//here is our callback function
const buttonEventHandler = (event) => {
  console.log(event, `The button was clicked.`)
}
//when the button is clicked, this event is triggered
button.addEventListener('click', buttonEventHandler)
// add a 'mousemove' handler for the mouseArea
  //this is our callback (nice and reusable)-> handles when a mouse
  //does over our selected area
const mouseEventHandler = (event) => {
  console.log(event, "hello!")
}
  //attatched an event listener by using addEventListener
mouseArea.addEventListener('mouseover', mouseEventHandler)
// add a 'keydown' handler for the entire document
const keydownHandler = (event) => {
  console.log(event, "me when i press the down on my keyboard be like:")
}

document.body.addEventListener('keydown', keydownHandler)


const displayKey = (event) => {
  console.log(event)
  let p = document.createElement("p")
  p.innerText = event.key
  document.body.append(p)
}

document.body.addEventListener('keydown', displayKey)


