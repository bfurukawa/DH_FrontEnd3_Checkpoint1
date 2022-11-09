//Este componente deverá receber dados por Props e mostrar as Informações em Tela
//import './CardStyle.scss'

export function Card (props) {
  return (
    <div className='card-div' style={{
      'border-radius': '50',
      'width': '15%',
      'height':'100px',
      'font-size':'10px',

      'background-color': props.corCard.cor
      }}>
      <h1>{props.corCard.nome}</h1>
    </div>
  )
}