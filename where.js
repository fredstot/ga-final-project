let enterButton = document.getElementById('Enter')
enterButton.addEventListener("click",storeEnter)
function storeEnter() {
  let mySuggestion = document.getElementById('Location')
  console.log(mySuggestion.value);
   
}
//cookie//
function save(){
var mySuggestion = document.getElementById('Location').value

database.ref('users/'+ location).set({
  location: location,
})
alert ('saved')
}