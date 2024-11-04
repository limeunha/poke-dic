import './css/PokeInsert.css'
import './css/PokeInsert.css';
import React, { useState } from 'react';

const PokeInsert = ({ onInsert }) => {
    const [name, setName] = useState('');
    
    const pokemonImages = {
      가보리: 'http://localhost:3000/images/가보리.png',
      꼬부기: 'http://localhost:3000/images/꼬부기.png',
      나무지기: 'http://localhost:3000/images/나무지기.png',
      물짱이: 'http://localhost:3000/images/물짱이.png',
      버터플: 'http://localhost:3000/images/버터플.png',
      이상해씨: 'http://localhost:3000/images/이상해씨.png',
      잉어킹: 'http://localhost:3000/images/잉어킹.png',
      코산코: 'http://localhost:3000/images/코산코.png',
      코일: 'http://localhost:3000/images/코일.png',
      킬리아: 'http://localhost:3000/images/킬리아.png',
      파이리: 'http://localhost:3000/images/파이리.png',
      피카츄: 'http://localhost:3000/images/피카츄.png',
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const img = pokemonImages[name];
        if (!img) return; 
        onInsert({ name, img });
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="포켓몬 이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <button type="submit">추가</button>
        </form>
    );
};

export default PokeInsert;