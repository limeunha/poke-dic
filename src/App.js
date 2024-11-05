import React, { useState, useCallback } from 'react'
import PokeTemplate from './components/PokeTemplate'
import PokeInsert from './components/PokeInsert'
import PokeCard from './components/PokeCard'

function App() {
   const initialPokemons = [
      { id: 1, name: '가보리', img: '/images/가보리.png', checked: false },
      { id: 2, name: '꼬부기', img: '/images/꼬부기.png', checked: false },
      { id: 3, name: '나무지기', img: '/images/나무지기.png', checked: false },
   ]

   const allPokemons = [
      { id: 1, name: '가보리', img: '/images/가보리.png' },
      { id: 2, name: '꼬부기', img: '/images/꼬부기.png' },
      { id: 3, name: '나무지기', img: '/images/나무지기.png' },
      { id: 4, name: '리자드', img: '/images/리자드.png' },
      { id: 5, name: '물짱이', img: '/images/물짱이.png' },
      { id: 6, name: '버터플', img: '/images/버터플.png' },
      { id: 7, name: '이상해씨', img: '/images/이상해씨.png' },
      { id: 8, name: '잉어킹', img: '/images/잉어킹.png' },
      { id: 9, name: '코산코', img: '/images/코산코.png' },
      { id: 10, name: '코일', img: '/images/코일.png' },
      { id: 11, name: '킬리아', img: '/images/킬리아.png' },
      { id: 12, name: '파이리', img: '/images/파이리.png' },
      { id: 13, name: '피카츄', img: '/images/피카츄.png' },
   ]

   const [pokemons, setPokemons] = useState(initialPokemons)
   const [filteredPokemons, setFilteredPokemons] = useState([])

   const onAddPokemon = (poke) => {
      setPokemons((prevPokemons) => [...prevPokemons, poke])
   }

   const onRemovePokemon = (id) => {
      setPokemons((prevPokemons) => prevPokemons.filter((poke) => poke.id !== id))
   }

   const onToggle = useCallback(
      (id) => {
         const togglePokemons = pokemons.map((poke) => (poke.id === id ? { ...poke, checked: !poke.checked } : poke))
         setPokemons(togglePokemons)
      },
      [pokemons]
   )

   const onSearchPokemon = (name) => {
      const filtered = allPokemons.filter((poke) => poke.name.includes(name))
      setFilteredPokemons(filtered)
   }

   return (
      <PokeTemplate>
         <PokeInsert onAddPokemon={onAddPokemon} onSearchPokemon={onSearchPokemon} filteredPokemons={filteredPokemons} />
         <PokeCard pokemons={pokemons} onRemovePokemon={onRemovePokemon} onToggle={onToggle} />
      </PokeTemplate>
   )
}

export default App
