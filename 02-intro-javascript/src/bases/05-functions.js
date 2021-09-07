//Funciones en JS

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar2("Lorena"));
console.log(saludar3("Lorena"));

const getUser = () => ({
  uid: "ABS123",
  username: "El_papi1234",
});

const user = getUser();
console.log(user);

//Tarea
//1.Transformar a función flecha
//2. Retornar objeto implícito
//3. Pruebas
function getUsuarioActivo(nombre) {
  return {
    uid: "ABC4567",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);

//1.Flecha
const getUsuarioActivo2 = (nombre) => ({
  uid: "ABC4567",
  username: nombre,
});
console.log(getUsuarioActivo2("Pedro"));
