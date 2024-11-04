import React, { useState } from 'react';
import PokeTemplate from './components/PokeTemplate';
import PokeInsert from './components/PokeInsert';
import PokeCard from './components/PokeCard';


function App() {
    const [pokemonList, setPokemonList] = useState([]);

    const onInsert = ({ name, img }) => {
        const newPokemon = {
            id: pokemonList.length + 1,
            이름: name,
            이미지: img,
        };
        setPokemonList([...pokemonList, newPokemon]);
    };

    return (
        <PokeTemplate>
            <PokeInsert onInsert={onInsert} />
            <PokeCard text={pokemonList} />
        </PokeTemplate>
    );
}

export default App;
