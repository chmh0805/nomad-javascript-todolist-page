const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input')
const greeting = document.querySelector('h1')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

const savedUsername = localStorage.getItem(USERNAME_KEY)

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

function onLoginSubmit(e) {
  e.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username)
}

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  // show the greetings
  paintGreetings(savedUsername)
}
