//DEFINIR FUNCIONES AUXILIARES: obtener datos, crear información, mostrar mensaje
async function obtenerDatos(url) {
    try {
      let respuesta = await fetch(url);
      let datos = await respuesta.json();
  
      // Finalmente, devolvemos los datos obtenidos.
      return datos;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Esta función devuelve una promesa que se resuelve con el mensaje 'Información Enviada' después de tres segundos.
  function enviarInformacion() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Información Enviada');
      }, 3000);
    });
  }
  
  // función asíncrona que permita recibir el mensaje de la promesa y muestra el mensaje en la consola
  async function mostrarMensaje() {
    let mensaje = await enviarInformacion();
    console.log(mensaje);
  }
  
  // Función principal que llama a las dos funciones anteriores.
  async function main() {
    // Definimos la URL de la que queremos obtener los datos.
    const url = 'https://jsonplaceholder.typicode.com/photos';
  

    // await para esperar a que la promesa se resuelva antes de continuar con la ejecución del código.
    let datos = await obtenerDatos(url);
  

    // método slice() para obtener los primeros 20 elementos del arreglo de datos.
    // método forEach() para iterar sobre estos elementos y mostrar el título de cada uno en la consola.
    datos.slice(0, 20).forEach(dato => console.log(dato.title));
  

    // Llamamos a la función mostrarMensaje() para mostrar el mensaje en la consola después de tres segundos.
    mostrarMensaje();
  }
  
  // Llamar a la función principal.
  main();
  