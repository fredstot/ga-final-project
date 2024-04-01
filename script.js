let loginButton = document.getElementById('login')
loginButton.addEventListener("click",handleLogin)
function handleLogin() {
  let myPass = document.getElementById('password')
  if (myPass.value == 'ga') {
  let myDiv = document.getElementById('login-container')
  myDiv.classList.add("pop-up-dissapear")
  }
}
