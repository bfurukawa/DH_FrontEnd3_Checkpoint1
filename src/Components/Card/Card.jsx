//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import './CardStyle.scss'

export function Card (props) {
  return (
    <div className='card-div' style={{
      'background-color': props.corCard.cor
      }}>
      <h1>{props.corCard.nome}</h1>
      <h3>{props.corCard.cor}</h3>
    </div>
  )
}