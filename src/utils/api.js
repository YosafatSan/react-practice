export const mortyAttack = () => fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6')
    .then( resp => resp.json())
    .catch( err => console.log(err));

