// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBLniL0uZErDRBfcc4hFNUhPrHK3iXv-3g",
    authDomain: "kwitter-d6188.firebaseapp.com",
    databaseURL: "https://kwitter-d6188-default-rtdb.firebaseio.com",
    projectId: "kwitter-d6188",
    storageBucket: "kwitter-d6188.appspot.com",
    messagingSenderId: "440357263798",
    appId: "1:440357263798:web:06d2108274484ff4734917"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("Room_Name");
    window.location = "index.html";
}