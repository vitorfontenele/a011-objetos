const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5,
};

//a)
const pokemon1Copia = {
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água",
};

//b)
pokemon1.ataques = [];
pokemon1.ataques.push({
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100,
});

//c)
pokemon1Copia.ataques = [...pokemon1.ataques];

//d)
pokemon1.ataques = [
  ...pokemon1.ataques,
  {
    nome: "Folha Navalha",
    dano: 45,
    precisao: 100,
    tipo: "Grama",
  },
];

//e)
pokemon1Copia.ataques = [
  ...pokemon1Copia.ataques,
  {
    nome: "Jato de Água",
    dano: 40,
    precisao: 100,
    tipo: "Água",
  },
];

//f)
console.log(pokemon1);
console.log(pokemon1Copia);
