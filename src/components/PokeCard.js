import './css/PokeCard.css'
import React from 'react';

const PokeCard = ({ text }) => {
    return (
        <div className="card-container">
            {text.map((pokemon) => (
                <div key={pokemon.id} className="card">
                    <h2>{pokemon.이름}</h2>
                    <img src={pokemon.이미지} alt={pokemon.이름} />
                </div>
            ))}
        </div>
    );
};

export default PokeCard;