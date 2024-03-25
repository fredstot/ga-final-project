document.getElementById("login_button").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "flex";
})
document.querySelector(".close").addEventListener("click", function () {
document.querySelector(".popup").style.display = "none" ;
})
var attempt = 3;
function validation() {
  var password = document.getElementById("password").value;
  if(password === "GA") {
    alert("Success!");
    window.location="swap.html";
    return false;
  }
  else{
    if (attempt ===0) {
      document.getElementById("password").disabled=true;
      document.getElementById("submit").disabled=true
      return false;
    }
  }
}
  