import { useState } from 'react'
import './styles.css'

function Home() {
  

  return (
    <>
      <div className="container">
        <form>
          <h1>Cadastros de Usuários</h1>
            <input name='nome' type='text'/>
            <input name='nome' type='email'/>
            <button type='button'>cadastrar</button>
        </form>
        
      </div>
    </>
  )
}

export default Home
