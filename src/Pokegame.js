// import all pokemons
// random split in 2 groups of 4
import splitDeck from "./helpers";
import Pokemons from "./Pokemons";
import Pokedex from "./Pokedex";

function Pokegame({Pokedeck = Pokemons}) {
  const deck = splitDeck(Pokedeck);
  const deckOne = deck[0];
  const deckTwo = deck[1];
//totalExpOne, Two;
  let sumOne = 0;
  let sumTwo = 0;
  //reduce
  deckOne.forEach(p => sumOne += p.base_experience);
  deckTwo.forEach(p => sumTwo += p.base_experience);

  return (
    <div>
  < Pokedex pokes={deckOne} isWinner = {sumOne > sumTwo}/>
  < Pokedex pokes={deckTwo} isWinner = {sumTwo > sumOne}/>
  </div>
  );
}

export default Pokegame;