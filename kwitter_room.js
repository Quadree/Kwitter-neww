
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAAkjJTHqURKbE_gh3BGatixnFBZIYX1rk",
      authDomain: "kwitter-5ae57.firebaseapp.com",
      databaseURL: "https://kwitter-5ae57-default-rtdb.firebaseio.com",
      projectId: "kwitter-5ae57",
      storageBucket: "kwitter-5ae57.appspot.com",
      messagingSenderId: "405267796583",
      appId: "1:405267796583:web:15eaace8e93400f82bbac2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
    username=localStorage.getItem("username");
    document.getElementById("usernamedisplay").innerHTML="Welcome "+username+"!";
    function addroom(){
          roomname=document.getElementById("roomname").value;
          firebase.database().ref("/").child(roomname).update({purpose:"adding user"}); 
          localStorage.setItem("roomname",roomname);
          window.location="kwitter_page.html";
    }
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("outputdiv").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room name -"+ Room_names);
      row = "<div class='roomname' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname"); 
      window.location="index.html";
}
