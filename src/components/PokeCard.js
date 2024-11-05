import React from 'react'
import './css/PokeCard.css'

const PokeCard = ({ pokemons, onRemovePokemon, onToggle }) => {
   return (
      <div>
         <ul>
            {pokemons.length === 0 ? (
               <p>포켓몬이 없습니다.</p>
            ) : (
               pokemons.map((poke) => (
                  <li key={poke.id} className={`poke-card ${poke.checked ? 'disabled' : ''}`} onDoubleClick={() => onToggle(poke.id)}>
                     <div>
                        <img src={poke.img} alt={poke.name} className={poke.checked ? 'disabled-img' : ''} />
                        <p className={poke.checked ? 'disabled-text' : ''}>{poke.name}</p>
                        <button onClick={() => onRemovePokemon(poke.id)}>삭제</button>
                     </div>
                  </li>
               ))
            )}
         </ul>
      </div>
   )
}

export default PokeCard
