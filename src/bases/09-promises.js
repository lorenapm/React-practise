//Promesa: crean con un argumento callback
//Recibe 2 parámetros: resolve y reject
//resolve: fc que se ejecuta cuando la promesa es exitosa
//reject: ejecuta cuando falla.
//serTimeout: fc de JS que ermite realizar una fc en cierto tiempo.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 2000);
// });
import heroes from "../src/data/heros";
import { getHeroeById } from "../src/bases/08-imp-exp";

// promise.then(() => {
//   console.log("Then de la promesa");
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//   }, 2000);
// });

// promise.then((heroe) => {
//   console.log("heroe", heroe);
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     //reject();
//     reject("No se pudo encontrar el heroe");
//   }, 2000);
// });

// promise
//   .then((heroe) => {
//     console.log("heroe", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el heroe");
      }
      //resolve(heroe);
      //reject('No se pudo encontrar el heroe');
    }, 2000);
  });
};

getHeroeByIdAsync(2).then(console.log).catch(console.warn);
