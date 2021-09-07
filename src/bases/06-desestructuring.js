//Desestructuración o asignación desestructurante
const user = {
  name: "tony",
  age: 45,
  id: "ironman",
  city: "Boston",
};

//const { name, age, id } = user;

//console.log(age, id);

//ojo, usó useContext (no pedro), pero a mi no me deja, me da error
const pedro = ({ name, age, id, city }) => {
  return {
    nombreClave: id,
    anios: age,
    latlng: {
      lat: 12.768,
      lng: -23.2335,
    },
  };
};
//const avenger = pedro(user);

const { nombreClave, anios, latlng } = pedro(user);
const { lat, lng } = latlng;

console.log(nombreClave, anios, lat, lng);
