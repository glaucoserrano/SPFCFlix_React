import { Botao } from "./styled";

const Botoes =  ({link,children}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Botao>{children}</Botao>
    </a>
  )
}

export default Botoes;