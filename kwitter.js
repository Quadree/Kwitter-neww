function loginto(){
    inputvalue=document.getElementById("inputlogin").value;
    localStorage.setItem("username",inputvalue);
    window.location="kwitter_room.html"; 
}