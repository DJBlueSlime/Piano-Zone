/*(async () => {
 const {value: name} = await Swal.fire({
    title: "Saludos!",
    text: "Por favor ingresa tu nombre",
    input: "text",
    inputPlaceholder: "Nombre",
    inputValue: '',
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#21c24c",
    icon: "info",
    backdrop: true,
    padding: "0.8rem",
    preConfirm: (value) => {
      if(value == ''){
        swal.showValidationMessage('No has ingresado ningun nombre. Por favor ingresa un nombre')
      }
    }
  })
  var uName = name;
  
  if(name){
    Swal.fire({
      title: 'Bienvenido!, ' + name,
      text: "Esta es una web que genera notas aleatorias de piano para que practiques",
      confirmButtonColor: "#21c24c",
      confirmButtonText: "Ok",
      icon: "success"
    })
    console.log(uName);
  }
})()*/
Swal.fire({
  title: "Saludos",
  text: "Por favor Inicia sesión o Regístrate",
  showCancelButton: true,
  confirmButtonText: "Iniciar Sesión",
  cancelButtonText: "Regístrarse",
  icon: "info",
  backdrop: true,
  padding: "0.8rem"
}).then((result) => {
  if (result.value){
    window.location.href = "LoginPage/loginPage.html"
  } else if(
      result.dismiss === Swal.DismissReason.cancel
    ){
      window.location.href = "SignupPage/signupPage.html"
    }
})