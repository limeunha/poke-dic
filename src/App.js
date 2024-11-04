import PokeTemplate from './components/PokeTemplate'
import PokeInsert from './components/PokeInsert'
import PokeCard from './components/PokeCard'
import React, { useState } from 'react'

function App() {
   const [text, setText] = useState([
      { id: 1, 이름: '가보리', 이미지: './images/가보리.jpg' },
      { id: 2, 이름: '꼬부기', 이미지: './images/꼬부기.jpg' },
      { id: 3, 이름: '나무지기', 이미지: './images/나무지기.jpg' },
      { id: 4, 이름: '리자드', 이미지: './images/리자드.jpg' },
      { id: 5, 이름: '물짱이', 이미지: './images/물짱이.jpg' },
      { id: 6, 이름: '버터플', 이미지: './images/버터플.jpg' },
      { id: 7, 이름: '이상해씨', 이미지: './images/이상해씨.jpg' },
      { id: 8, 이름: '잉어킹', 이미지: './images/잉어킹.jpg' },
      { id: 9, 이름: '코산코', 이미지: './images/코산코.jpg' },
      { id: 10, 이름: '코일', 이미지: './images/코일.jpg' },
      { id: 11, 이름: '킬리아', 이미지: './images/킬리아.jpg' },
      { id: 12, 이름: '파이리', 이미지: './images/파이리.jpg' },
      { id: 13, 이름: '피카츄', 이미지: './images/피카츄.jpg' },
   ])

   const onInsert = ({ name, img }) => {
      const newPokemon = {
         id: text.length + 1,
         이름: name,
         이미지: img,
      }
      setText(text.concat(newPokemon))
   }

   return (
      <PokeTemplate>
         <PokeInsert onInsert={onInsert} />
         <PokeCard text={text} />
      </PokeTemplate>
   )
}

export default App
