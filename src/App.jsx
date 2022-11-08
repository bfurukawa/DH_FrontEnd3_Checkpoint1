import {Card, useState, useSyncExternalStore} from 'react'
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nome, setNome] = useState('')
  const [cor, setCor] = useState('')
  const [lista, setLista] = useState([])

  function criaCard(e){
    console.log(nome);
    e.preventDefault();
    const novoCard = {
      corCard: cor,
      nomeCArd: nome
    }
  }

  return (
    <div className="App">
     <h1>Carga de estudiantes</h1>
     <form id="formulario" onSubmit={criaCard}>
       <label htmlFor="nome">nome</label>
       <input id="texto" type="text" value={nome} onChange={e=>setNome(nome+e.target.value)} />
       <label htmlFor="cor">cor</label>
       <input id="cor" type="text" value={cor} onChange={e=>setCor({cor: e.target.value})}/>
       <input id="btn" type="submit" value="Salvar" />
      {/* Comece a desenvolver o seu Código por aqui :) */}
     </form>
    </div>
  )
}

export default App