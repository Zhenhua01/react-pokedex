
function Pokecard({ id, name, type, base_experience}) {
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return (
    <div className="Pokecard">
      <h5> { name } </h5>
      <img src={ imageURL } alt="pokemon" />
      <p>Type: { type } </p>
      <p>EXP: { base_experience } </p>
    </div>
  )
}

export default Pokecard;