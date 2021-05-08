document.querySelector('button').addEventListener('click',getPoke);

function getPoke(){
   const choice = document.querySelector('#poke1').value;
   const choice2 = document.querySelector('#poke2').value;
   const choice3 = document.querySelector('#poke3').value;
   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice;
   const url2 = 'https://pokeapi.co/api/v2/pokemon/'+choice2;
   const url3 = 'https://pokeapi.co/api/v2/pokemon/'+choice3;
   let pokeStore = [];
   let pokeImg = [];

   fetch(url)
      .then(res => res.json())
      .then(data =>{
         console.log(data.types[0].type.name);
         pokeStore.push(data.types[0].type.name);
         pokeImg.push(data.sprites.front_shiny);
      })

      fetch(url2)
      .then(res => res.json())
      .then(data =>{
         console.log(data.types[0].type.name);
         pokeStore.push(data.types[0].type.name);
         pokeImg.push(data.sprites.front_shiny);
      })

      fetch(url3)
      .then(res => res.json())
      .then(data =>{
         console.log(data.types[0].type.name);
         pokeStore.push(data.types[0].type.name);
         pokeImg.push(data.sprites.front_shiny);
         console.log(pokeStore[0],pokeStore[1],pokeStore[2]);
         if((pokeStore[0] === "grass" && pokeStore === "water" && pokeStore === "electric")){
            document.querySelector('#pokeImg1').src = pokeImg[0];
            document.querySelector('#pokeImg2').src = pokeImg[1];
            document.querySelector('#pokeImg3').src = pokeImg[2];
         }
      })

      .catch(err =>{
         console.log(`error ${err}`);
      })

      .catch(err =>{
         console.log(`error ${err}`);
      })

      .catch(err =>{
         console.log(`error ${err}`);
      })

}