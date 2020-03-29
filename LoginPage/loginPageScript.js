window.onload = function() {
  var firebaseConfig = {
    apiKey: "AIzaSyCsFBpqVFA-5B0i4mL4cg2FHKQvgyX7qAY",
    authDomain: "rdg-1220.firebaseapp.com",
    databaseURL: "https://rdg-1220.firebaseio.com",
    projectId: "rdg-1220",
    storageBucket: "rdg-1220.appspot.com",
    messagingSenderId: "736549219111",
    appId: "1:736549219111:web:473c1270f3d846c7ad5702",
    measurementId: "G-GDN2EH6GXK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const auth = firebase.auth();
  const db = firebase.firestore();
  var loginForm = document.querySelector("#loginForm");
  if(loginForm){
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
    
      var email = loginForm['email'].value;
      var password = loginForm['password'].value;
    
      auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        loginForm.reset();
        Swal.fire({
            title: "Sesión Iniciada Correctamente",
            text: "Se ha iniciado sesión exitosamente",
            icon: "success",
            confirmButtonColor: "#2ecc71",
            confirmButtonText: "Excelente"
          }).then(() => {
            setTimeout(function(){
              window.location.href = "index.html"
            }, 400)
            Swal.fire({
              title: "Redirigiendote...",
              onBeforeOpen: () => {
                Swal.showLoading();
              }
            })
          })
      }).catch(err => {
        /*Swal.fire({
              title: "Hubo un error",
              text: "Ha sucedido un error: " + err.message,
              icon: "error"
      })*/
      if(err){
        var error = err.code;
        if(error == "auth/user-not-found"){
         Swal.fire({
           title: "Usuario no encontrado",
           text: "Prueba con otro e-mail"
         })
        }
        if (error == "auth/invalid-email") {
          $('#errorText').html('E-mail invalido')
        }
      }
   })

 
  })
}
}