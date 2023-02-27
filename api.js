const url = 'https://api.weatherapi.com/v1/current.json?key=4d076b1ef04645088f0195929232402&q=auto:ip';
const clima =  document.querySelector('#clima');
const temper =  document.querySelector('#temp');
const imagen = document.querySelector('#i');
const tabla = document.querySelector('#cont');
const boton = document.querySelector('#boton');

function mostrar(){
  fetch(url, {
  'mode': 'cors',
})
  .then(respuesta => respuesta.json())
  .then((data) => mostrarHtml(data))
  .catch((error) => console.log(error))

  function mostrarHtml(data) {
  console.log(data);

  clima.innerHTML = `${data.current.condition.text}`;
  temper.innerHTML = `${data.current.temp_c}`;
  imagen.src = `https:${data.current.condition.icon}`;
  tabla.style.display = "block";
  boton.value = "Ocultar";
  boton.setAttribute( "onClick","ocultar();");
  }
}

function ocultar(){
  tabla.style.display = "none";
  boton.value = "Mostrar Clima";
  boton.setAttribute( "onClick","mostrar();");
}
