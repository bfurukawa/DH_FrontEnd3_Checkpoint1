//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  console.log(props.nome);
  return (
    <div style={{color: props.a}}>
      <h1>{props.div.formulario.nome}</h1>
    </div>
  )
}