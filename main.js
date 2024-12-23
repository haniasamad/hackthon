

// //   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// //   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

// //   const firebaseConfig = {
// //     apiKey: "AIzaSyBM5qRDZQtrNarM8WOFVqzZRvhDLAyex0w",
// //     authDomain: "create-account-69727.firebaseapp.com",
// //     projectId: "create-account-69727",
// //     storageBucket: "create-account-69727.firebasestorage.app",
// //     messagingSenderId: "1087979649795",
// //     appId: "1:1087979649795:web:f5b99d033c4abffe41c736",
// //     measurementId: "G-091HVTVL42"
// //   };
// //   const app = initializeApp(firebaseConfig);
// //   const analytics = getAnalytics(app);


// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyBrobcKkmWlHVbYtF7YI7XrYn3UDfJewOc",
//   authDomain: "pass-ac3a9.firebaseapp.com",
//   projectId: "pass-ac3a9",
//   storageBucket: "pass-ac3a9.firebasestorage.app",
//   messagingSenderId: "651600632119",
//   appId: "1:651600632119:web:70cd2c2a8c8edf86ce62b2",
//   measurementId: "G-S4XY4C5W8C"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// window.createAccount = () => {

//   let email = document.getElementById("email").value
//   let password = document.getElementById("password").value

//   const auth = getAuth();

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {

//       const user = userCredential.user;
//       console.log(user);

//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(error);

//     })
// };

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBrobcKkmWlHVbYtF7YI7XrYn3UDfJewOc",
    authDomain: "pass-ac3a9.firebaseapp.com",
    projectId: "pass-ac3a9",
    storageBucket: "pass-ac3a9.firebasestorage.app",
    messagingSenderId: "651600632119",
    appId: "1:651600632119:web:70cd2c2a8c8edf86ce62b2",
    measurementId: "G-S4XY4C5W8C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

window.createAccount = () => {
    //   console.log("kashna");

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href=("index.html")
            const user = userCredential.user;
            console.log(user);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);

        })
};

