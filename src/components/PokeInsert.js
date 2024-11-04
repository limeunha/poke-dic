import './css/PokeInsert.css'
import React, { useState } from 'react'

function PokeInsert({ onInsert }) {
   const [name, setName] = useState('')
   const [img, setImage] = useState('')

   const onChangeName = (e) => setName(e.target.value)
   const onChangeImage = (e) => setImage(e.target.value)

   const onSubmit = (e) => {
      e.preventDefault()
      onInsert({ name, img })

      setName('')
      setImage('')
   }
   return (
      <form className="PokeInsert" onSubmit={onSubmit}>
         <input placeholder="포켓몬 이름을 입력하세요" value={name} onChange={onChangeName} />
      </form>
   )
}

export default PokeInsert
