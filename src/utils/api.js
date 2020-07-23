export const getCards = () => fetch('https://rickandmortyapi.com/api/character/1,2,6,7,14,15')
    .then( resp => resp.json())
    .catch( err => console.log(err));

export const filterResults = ( filterSpecie, allCards ) => allCards.filter( card => card.species.toLowerCase().includes(filterSpecie.toLowerCase()));


