//1.High order functions.
let animals=[
  {names:"bruno", species:"dog"},
  {names:"bruno", species:"dog"},
  {names:"meow", species:"cat"},
  {names:"Bruno", species:"dog"},
  {names:"meow", species:"cat"},
  {names:"meow", species:"cat"},
  {names:"meow", species:"cat"},
];

//without filter
let isDog=function(animal){
  return animal.species==="dog"
}
var doggy=animals.filter(isDog)
console.log(doggy);
// filter
let dogss=animals.filter(function(animal){
  return animal.species==="dog"
})
// console.log(dogs);

//for loop
let dogs=[];
for(let i=0; i<dogs.length; i++){
  if(animals[i]==="dog"){
  return  dogs.push(animals[i].species)
  }
}
console.log(dogs)

//2.map
// let namey=animals.map(function(animal){
//   return animal.names+' is a '+ animal.species
// })



//es6 format 
let namey=animals.map((animal)=>animal.names)
console.log(namey)

// 3.REDUCE
//basics

let num=[
  {amount:250},
  {amount:250},
  {amount:250},
  {amount:250},
  {amount:250}
] 

let total=animals.reduce((su,order)=>su + order.names,0 )
 console.log(total)

 //advanced