import { useState } from 'react'
import Game from './components/Game'
import {Restart} from './components/Restart'

export const palavras = ['banana','laranja','abacaxi','pera','maca','melancia','uva',]

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>Secret Word</h1>
    <p>Clique no botão abaixo para começar a jogar</p>
    <button onClick={e => setCount(1)}>COMEÇAR JOGO</button>

    {count === 1 ? <Game setCount={setCount} palavra={palavras[Math.floor(Math.random() * palavras.length)]} /> : null}
    {count === 2 ? <Restart setCount={setCount} />: null}
    </>
    )
}
export default App
