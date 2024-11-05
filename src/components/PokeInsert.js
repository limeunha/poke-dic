import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import './css/PokeInsert.css'

const PokeInsert = ({ onAddPokemon, onSearchPokemon, filteredPokemons }) => {
   const [inputName, setInputName] = useState('')

   const handleNameChange = (e) => {
      const name = e.target.value
      setInputName(name)
      onSearchPokemon(name)
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      if (filteredPokemons.length > 0) {
         onAddPokemon(filteredPokemons[0])
         setInputName('')
      }
   }

   return (
      <div className="PokeInsert">
         <form onSubmit={handleSubmit}>
            <input type="text" value={inputName} onChange={handleNameChange} placeholder="포켓몬 이름 입력하세요" />
            <button type="submit" disabled={filteredPokemons.length === 0}>
               <FaPlus />
            </button>
         </form>
      </div>
   )
}

export default PokeInsert
