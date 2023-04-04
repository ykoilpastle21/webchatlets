const firebaseConfig = {
    apiKey: "AIzaSyDErwm45EVQL-E9dRQ822hIWv7g4ZbaMZg",
    authDomain: "kwitter-cb6eb.firebaseapp.com",
    databaseURL: "https://kwitter-cb6eb-default-rtdb.firebaseio.com",
    projectId: "kwitter-cb6eb",
    storageBucket: "kwitter-cb6eb.appspot.com",
    messagingSenderId: "944130115348",
    appId: "1:944130115348:web:0977528773be979146e401"
  };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";
function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
})
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
  console.log("room_name" + Room_names);
  row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomname(this.id)'> #" + Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomname(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location = "index.html"
}