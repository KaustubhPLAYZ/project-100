// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCCSNUyjE0Fr3Wvb-KIT6imyJB95uP1D1A",
  
    authDomain: "chat-app-38231.firebaseapp.com",
  
    databaseURL: "https://chat-app-38231-default-rtdb.firebaseio.com",
  
    projectId: "chat-app-38231",
  
    storageBucket: "chat-app-38231.appspot.com",
  
    messagingSenderId: "1079808909744",
  
    appId: "1:1079808909744:web:f0e96675d028b9f0077675"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



