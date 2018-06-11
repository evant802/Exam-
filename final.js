var db = firebase.database();
//the console making sure someone is either signed in, signed out, or no account at all
document.getElementById("gamePlay").style.display = "none";
document.getElementById("c").style.display = "none";
document.getElementById("color").style.display = "none";
firebase.auth().onAuthStateChanged(function(user){
  if(user){
    console.log(user.email);
    document.getElementById("userLogin").innerHTML =
    ("<p> Currently logged in as: " + user.email + "</p>");
    document.getElementById("gamePlay").style.display = "block";
	document.getElementById("color").style.display = "block";
  }
  else {
    console.log("No user logged in. Please create an account OR log in");
    document.getElementById("userLogin").innerHTML = ("<p> No user logged in </p>");
    document.getElementById("gamePlay").style.display = "none";
	document.getElementById("color").style.display = "none";
  }
});

function createAccount(){
var email = document.getElementById("email").value; //finding the email that was entered
var password = document.getElementById("password").value
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  console.log(error.message); //or however you want to handle the error
});
}

function login(){
  var email = document.getElementById("email").value; //finding the email that was entered
  var password = document.getElementById("password").value
  console.log(email)
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    console.log(error.message); //or however you want to handle the error
  });
}
function logout(){
  firebase.auth().signOut().then(function() {
    console.log("Signed Out")
    document.getElementById("c").style.display = "none";
	document.getElementById("color").style.display = "none";
}, function(error){
  console.error("Sign out error" + error);
});
}
