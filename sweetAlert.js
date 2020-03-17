Swal.fire({
  title: "Hola",
  text: "Esta es una pagina que genera notas de piano aleatoria para que practiques",
  confirmButtonText: "Genial"
}).then((result) => {
  if(result.value){
  Swal.fire({
   title: 'Tu nombre',
   text: "Por favor ingresa tu nombre",
   input: "text",
   inputPlaceholder: "Nombre",
   icon: "info"
  })
 }
})

/*Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})*/