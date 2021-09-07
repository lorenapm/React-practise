const user = {
  name: "Tony",
  firstname: "Stark",
  age: 45,
  address: {
    street: "Hospital de Orbigo",
    number: 1,
    zip: 28050,
    lat: 14.2234,
    lng: 34.8976,
  },
};

//console.table(user);
console.log(user);

const user2 = { ...user };
user2.name = "Peter";
user2.firstname = "Pérez";

console.log(user);
console.log(user2);
