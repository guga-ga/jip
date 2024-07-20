var firebaseConfig = {
      apiKey: "AIzaSyAa_F_XPoUgs3fDSJLswTZhQrxv7rZj6_0",
      authDomain: "kwitter-project-69bb1.firebaseapp.com",
      databaseURL: "https://kwitter-project-69bb1-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-69bb1",
      storageBucket: "kwitter-project-69bb1.appspot.com",
      messagingSenderId: "836414661057",
      appId: "1:836414661057:web:ba5388ac217767dca20f40"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " +user_name+ "!";

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update
          ({
             purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Names -"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='rdirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      });});}
getData();

function rdirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_names",name);
window.location="letschatapp_page.html";
}
