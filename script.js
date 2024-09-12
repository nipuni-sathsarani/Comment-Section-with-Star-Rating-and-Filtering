
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBalFIg7vUCVLspcxHZnMtQo0OtgvGS0WE",
    authDomain: "starrating-5d2c9.firebaseapp.com",
    projectId: "starrating-5d2c9",
    storageBucket: "starrating-5d2c9.appspot.com",
    messagingSenderId: "297349695847",
    appId: "1:297349695847:web:e229e6e10bd8702ff547c2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//get ref to database services
const db = getDatabase(app);

document.getElementById("submit").addEventlistener('click', function(e){
    set(ref(db,'user/'+ document.getElementById('comment').value),{
        comment: document.getElementById('comment').value,
        rate:document.getElementById('rate').value,
});
})