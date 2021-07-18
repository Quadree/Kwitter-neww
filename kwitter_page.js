//YOUR FIREBASE LINKS
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
    roomname=localStorage.getItem("roomname");
    function send(){
          msg=document.getElementById("Messageinput").value;
          firebase.database().ref(roomname).push({
                name:username,
                message:msg,
                like:0
          });
          document.getElementById("Messageinput").value="";
    }
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
 { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name+"<img src='tick.png' class='user_tick'>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button></h4>";
row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;


//End code
      } });  }); }
getData();
 console.log(getData())
function updateLike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(roomname).child(message_id).update({
            like:updated_likes
      });

}


function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
} 