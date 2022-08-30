import './Pokedex.css';
import Pokecard from "./Pokecard";
import pokemons from "./Pokemons";

function Pokedex({ pokes = pokemons, isWinner = false }) {

  return (
    <div>
      <h2>Pokedex</h2>
      <div className="Pokedex">
        {pokes.map(p => {
          return < Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
          />;
        })}
        <p>{isWinner ? "THIS HAND WINS" : null }</p>
      </div>
    </div>
  );
}

export default Pokedex;