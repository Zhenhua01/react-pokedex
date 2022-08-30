// import all pokemons
// random split in 2 groups of 4
import splitDeck from "./helpers";
import Pokemons from "./Pokemons";
import Pokedex from "./Pokedex";

function Pokegame() {
  const deck = splitDeck(Pokemons);
  const deckOne = deck[0];
  const deckTwo = deck[1];
  let sumOne = 0;
  let sumTwo = 0;
  deckOne.forEach(p => sumOne += p.base_experience);
  deckTwo.forEach(p => sumTwo += p.base_experience);

  let isWinner = sumOne > sumTwo ? sumOne : sumTwo;
  return (
    <div>
  < Pokedex pokes={deckOne} isWinner = {sumOne===isWinner}/>
  < Pokedex pokes={deckTwo} isWinner = {sumTwo===isWinner}/>
  </div>
  );
}

export default Pokegame;