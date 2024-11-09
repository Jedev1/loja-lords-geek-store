import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAKnUqZ4FyMDmytc-HDmzTyZN2V1rtjXR0",
    authDomain: "lord-s-geek-store.firebaseapp.com",
    databaseURL: "https://lord-s-geek-store-default-rtdb.firebaseio.com",
    projectId: "lord-s-geek-store",
    storageBucket: "lord-s-geek-store.appspot.com",
    messagingSenderId: "1012775194938",
    appId: "1:1012775194938:web:0c365b085ceca90c930003",
    measurementId: "G-1JFQFG8X75"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const bancodedados = getDatabase(app);
const auth = getAuth();

login.addEventListener('click', (e) => {

})

signIn.addEventListener('click', (e) => {

    var email = document.getElementById('email_cadastro').value;
    var password = document.getElementById('senha_cadastro').value;
    var user = document.getElementById('usuario_cadastro').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("usuario criado");    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });
})