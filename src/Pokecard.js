import './Pokecard.css';

const URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ id, name, type, base_experience}) {
  const imageURL = `${URL}${id}.png`
  return (
    <div className="Pokecard">
      {/** COMMENTS! */}
      <h5> { name } </h5>
      <img src = { imageURL } alt={ name }  />
      <p>Type: { type } </p>
      <p>EXP: { base_experience } </p>
    </div>
  )
}
//NOTE: better p tag vs h5

export default Pokecard;