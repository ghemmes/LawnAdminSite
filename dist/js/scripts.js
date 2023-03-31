/*!
* Start Bootstrap - Lawn Admin v6.0.5 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Lawn Admin
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCBN-wifWLgZlNGnHRue2IWpFgUBosIs9A",
    authDomain: "lawnadm-439f1.firebaseapp.com",
    projectId: "lawnadm-439f1",
    storageBucket: "lawnadm-439f1.appspot.com",
    messagingSenderId: "820429638224",
    appId: "1:820429638224:web:6873b35746ec5317a0df55",
    measurementId: "G-VDX2NNMTN6"
    };
    firebase.initializeApp(config);
    // firebase.analytics();


    const auth = firebase.auth()





  let signUpButton = document.getElementById('signup')
  signUpButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")
    
    auth.createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      location.reload();
      // Signed in 
      var user = userCredential.user;
      console.log("user",user.email)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error code", errorCode)
      console.log("error Message", errorMessage)
    });
  })




  let signInButton = document.getElementById('signin')
  signInButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    auth.signInWithEmailAndPassword(email.value, password.value) 
    .then((userCredential) => {
      // location.reload();
      // Signed in 
      var user = userCredential.user;
      console.log("user",user.email)
      window.location = "test1.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // alert("error code", errorCode)
      alert( errorMessage)
    });
   })


auth.onAuthStateChanged(function(user) {
  if (user) {

    var email = user.email
  
    var users = document.getElementById("user")
    var text = document.createTextNode(email);

    users.appendChild(text);

    console.log(users)
    //is signed in
  } else {
    //no user signed in
  }
})
    



        //- <script async src="https://www.googletagmanager.com/gtag/js?id=G-4N62QC1QXN"></script>
        //- <script>
        //- window.dataLayer = window.dataLayer || [];
        //- function gtag(){dataLayer.push(arguments);}
        //- gtag('js', new Date())

        //- gtag('config', 'G-4N62QC1QXN')