import React from 'react'

export default function SeuNome({ setNome }) {
  return (
    <>
        <p>Digite seu nome aqui:</p>
        <input type="text" placeholder="Qual e o seu nome?" onChange={(e) => setNome(e.target.value)} />
    </>
  )
}
