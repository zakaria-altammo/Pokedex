// DOM Objects
const name = document.querySelector(".poke-name");
const pokId = document.querySelector(".poke-id");
const image1 = document.querySelector(".poke-image");
const image2 = document.querySelector(".prev");
const move1 = document.querySelector(".move-one");
const move2 = document.querySelector(".move-two");
const move3 = document.querySelector(".move-three");
const move4 = document.querySelector(".move-four");



const preEvolution = document.querySelector(".pre-evolution");

// funcrions

//const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

async function getPokemon(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
    const data = await response.json();
    console.log(data);
    name.innerHTML = "<h1>" + data.name + "</h1>";
    pokId.innerHTML = '# ' + data['id'];
    const dataMoves = data['moves'];
    move1.innerHTML = dataMoves[0]['move']['name'];
    move2.innerHTML = dataMoves[1]['move']['name'];
    move3.innerHTML = dataMoves[2]['move']['name'];
    move4.innerHTML = dataMoves[3]['move']['name'];
    image1.src = data['sprites']['front_default'];

}
getPokemon();


async function evoPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
    const data = await response.json();
    console.log(data);
     const evolution = data['species'];
    preEvolution.innerHTML = 'It evolved from ' + evolution['name'];
    image2.src = data['sprites']['front_default'];
}
evoPokemon();



/*fetch('https://pokeapi.co/api/v2/pokemon/6')
 .then(res => res.json())
 .then(data => {
    console.log(data);
    name.innerHTML = "<h1>" + data.name + "</h1>";
    pokId.textContent = '# ' + data['id'];
    const dataMoves = data['moves'];
    move1.textContent = dataMoves[0]['move']['name'];
     move2.textContent = dataMoves[1]['move']['name'];
     move3.textContent = dataMoves[2]['move']['name'];
     move4.textContent = dataMoves[3]['move']['name'];
     image.src = data['sprites']['front_default'];

})*/
// search by Id or name
/*var SearchButton = document.querySelector(".search-btn");
SearchButton.onclick = getData;                  //still figure out how to make the search work
var inputArea = document.getElementById("searchIn").value;
inputArea.addEventListener('input', value);
function getData(){
}*/
const input = document.querySelector('.search');
const SearchButton = document.getElementById("btn");
SearchButton.onclick = updateValue;
input.addEventListener('input', updateValue);

function updateValue() {


}
