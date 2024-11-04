import './css/PokeCard.css'

function PokeCard(pokemon) {
   return (
      <div className="PokeCard">
         <img src={pokemon.이미지} alt={pokemon.이름} />
         <h3>{pokemon.이름}</h3>
      </div>
   )
}

export default PockeCard
