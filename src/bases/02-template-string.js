const nombre = "Lorena";

const apellido = "Pérez";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return "Hola " + nombre;
}

console.log(`Esto es un texto: ${getSaludo(nombre)}`);
