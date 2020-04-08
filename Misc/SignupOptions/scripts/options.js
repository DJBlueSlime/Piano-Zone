window.onload = function() {
  auth.signOut()
}

var googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('email');
googleProvider.addScope('profile');

$('.googleImg').on('click', function(){
  $(this).toggleClass('click')
  auth.signInWithPopup(googleProvider).then(user => {
    Swal.fire({
      title: "Registrado correctamente con Google" + user.email
    })
  })
})
