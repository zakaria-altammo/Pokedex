(function(){
    const namePok = document.querySelector(".poke-name");
    const pokId = document.querySelector(".poke-id");
    const image1 = document.querySelector(".poke-image");
    const image2 = document.querySelector(".prev");
    const move1 = document.querySelector(".move-one");
    const move2 = document.querySelector(".move-two");
    const move3 = document.querySelector(".move-three");
    const move4 = document.querySelector(".move-four");
    const preEvolution = document.querySelector(".pre-evolution");
    const run = document.getElementById('run')
    run.addEventListener('click', getPokemon)

 async function getPokemon(){
    let input = document.getElementById('input').value;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await response.json();
    console.log(data);
    namePok.innerHTML = data.name;
     const dataMoves = data['moves'];
      move1.innerHTML = dataMoves[0]['move']['name'];
      move2.innerHTML = dataMoves[1]['move']['name'];
      move3.innerHTML = dataMoves[2]['move']['name'];
      move4.innerHTML = dataMoves[3]['move']['name'];
     pokId.innerHTML = data.id;
     image1.src = data['sprites']['front_default'];
};
    async function evoPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
        console.log(data);
    }
})();

