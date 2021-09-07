const character = ["Goku", "Vegeta", "Trunks"];
const [, ch2] = character;
console.log(ch2);

const returnArray = () => {
  return ["ABC", 123];
};

const [text, number] = returnArray();
console.log(text, number);

//Tarea: ojo, no me deja llamarle useState como a él.
const nomedejallamarle = (value) => {
  return [
    value,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const [nombre, setNombre] = nomedejallamarle("Goku");
console.log(nombre);
setNombre();
