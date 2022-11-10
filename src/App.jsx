import {useState} from 'react'
import {Card} from './Components/Card/Card.jsx'
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [erroInput, setErroInput] = useState(false)
  const [msgErro, setMsgErro] = useState([])
  const [nome, setNome] = useState('')
  const [cor, setCor] = useState('')
  const [listaCores, setListaCores] = useState([
    {nome:'Azul',cor:'#0000FF'}
  ])

  //useEffect(()=>{console.log('use effect ran')},[erroInput,msgErro])

  function setCallback(value,setFunction){
    setFunction(value)
  }

  function resetErros(){
    setCallback('',setMsgErro)
    setCallback(false,setErroInput)
  }


  //Funcao recebendo o subnmit do dormulario
  function criaCard(e){
    e.preventDefault();

    //criamos variaveis locais que posteriormente serao enviadas ao contexto global
    let erroValidacao = false;
    let mensagemErro = [];

    //variavbel tempcorCriada para facilitar o desmembramento e trabalhar com a string
    let tempCor = cor

    

    //Resetamos a variavel booleana usada para identificad a presenca de erros
    //E resetamos a msg de erro a ser apresentada ao usuario
     if(nome.length == 0 || (nome.length<3) || (/\d/.test(nome))){
       erroValidacao = true
       mensagemErro.push('O nome contem menos que 3 caracteres ou contem numeros.')
      }

     if(tempCor.slice(0,1)!='#'){
       tempCor='#'+tempCor
     }
     if(tempCor.slice(1).length<0 ||tempCor.slice(1).length<6 || !(/\d/.test(tempCor.slice(1)))){
        erroValidacao = true
        mensagemErro.push('A cor deve ser apresentada no formato hexadecimal ex:#0000FF.')
        mensagemErro.push('A definicao da cor contem menos que 6 caracteres ou nao contem numeros.')
      }

     if(!erroValidacao){
       const novaCor = {
       nome:nome,
       cor:tempCor
     }
     setListaCores([...listaCores,novaCor])
     }
     setMsgErro(mensagemErro)
     setErroInput(erroValidacao)
  }

  return (
    <>
    <div className="App">
     <h1>Adicione uma cor</h1>
     {erroInput ? msgErro.map((itemMsgErro)=>{
       return <p className='msgErro'>{itemMsgErro}</p>
     }) : ''}
     <form id="formulario" onSubmit={criaCard}>
        <label htmlFor="nome" className='gridItem'>Nome:</label>
        <input id="texto" className={"textInput " +(erroInput ? 'erroValidacao' : '')} type="text" onChange={e=>setNome(e.target.value)} />
        <label htmlFor="cor">Cor:</label>
        <input id="cor" className={"textInput " +(erroInput ? 'erroValidacao' : '')} type="cor" onChange={e=>setCor(e.target.value)}/>
       <input id="btn" type="submit" value="Adicionar"/>
     </form>
    </div>
    <div style={{
      'display':'flex',
      'flex-direction':'row',
      'flex-wrap': 'wrap'
    }}>
      {listaCores.map((itemListaCor)=>{return(
        <Card corCard={itemListaCor} />
      )})}
    </div>
    </>
    
  )
}

export default App