const filezone = document.querySelectorAll('.filezone');
const formulario = document.querySelector('form');

const archivosSubidos = [];

filezone.forEach(function(fz){
  fz.addEventListener('dragover', function(e){
    e.preventDefault();
    fz.classList.add('over');
  });
  
  fz.addEventListener('dragleave', function(){
    fz.classList.remove('over');
  })

  fz.addEventListener('drop', function(e){
    e.preventDefault();
    fz.classList.remove('over');
    const archivos = e.dataTransfer.files
    for(let i = 0; i < archivos.length; i++) {
      const actual = archivos[i]

      archivosSubidos.push({
        nombre: actual.name,
        url: URL.createObjectURL(archivos[i]),
        file: archivos[i]
      });

      fz.innerHTML = archivosSubidos.reduce(function(prev, actual){
        return prev + '<div>'+actual.nombre+'</div>'
      }, "");

      console.log("ARCHIVOS SUBIDOS: ", archivosSubidos);
    }
  });
})

formulario.addEventListener('submit', function(e){
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const fd = new FormData();

  fd.append('nombre', document.querySelector('#txtNombre').value)
  fd.append('apellido', document.querySelector('#txtApellido').value)
  fd.append('email', document.querySelector('#txtEmail').value)
  fd.append('telefono', document.querySelector('#txtTelefono').value)

  for(let i = 0; i < archivosSubidos.length; i++) {
    fd.append('archivo_'+i, archivosSubidos[i].file);
  }

  xhr.open('POST', 'enviar.php');
  xhr.send(fd);

  xhr.addEventListener('load', function(){
    console.log(xhr.response);
  });
});

// blob:http://127.0.0.1:5500/67017347-8d24-4689-aea0-9bf8a45b7bc4
// blob:http://127.0.0.1:5500/355bfd17-b261-4f99-b9ba-00b87e891a5b