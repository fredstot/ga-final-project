let enterButton = document.getElementById('Enter')
enterButton.addEventListener("click",storeEnter)
function storeEnter() {
  let mySuggestion = document.getElementById('Location')
  console.log(mySuggestion.value);
    mySuggestion.value= "";
}