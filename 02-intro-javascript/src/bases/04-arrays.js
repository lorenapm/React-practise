//Arrays en JS

//no lo usamos así usualmente, salvo si queremos crear un arreglo tipo (o algo así :)
//const array = new Array(100);

//Ojo, push machaca
//array.push(1);

const array = [1, 2, 3, 4];
//let array2 = array;
//array2.push(5);

let array2 = [...array, 5];

const array3 = array2.map(function (number) {
  return number * 2;
});

console.log(array); //[1,2,3,4,5]
console.log(array2); //[1,2,3,4,5]
console.log(array3);
