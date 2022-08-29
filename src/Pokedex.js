
import Pokecard from "./Pokecard";
import pokemons from "./Pokemons";

function Pokedex() {


  return (
    <div className="Pokedex">
        { pokemons.map( p => {
          return < Pokecard id = {p.id} name = {p.name} type = {p.type} base_experience = {p.base_experience}/>
        })}
    </div>
  )
}

export default Pokedex;