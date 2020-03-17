(async () => {
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
    padding: "0.8rem"
  })
  
  if(name){
    Swal.fire({
      title: 'Bienvenido!, ' + name,
      text: "Esta es una web que genera notas aleatorias de piano para que practiques",
      confirmButtonColor: "#21c24c",
      confirmButtonText: "Ok",
      icon: "success"
    })
  }
})()