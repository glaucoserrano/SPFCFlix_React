
import { Botao } from "../index";
import {Container, TituloPrincipal,Descricao,DescricaoDetalhe,Titulo } from "./styles"


const Destaque = ({titulo,descricao,descricaodetalhe}) =>{
  return(
    <main>
      <TituloPrincipal>
          <Container>
            <Titulo>{titulo}</Titulo>
            <Descricao>{descricao}</Descricao>
            <DescricaoDetalhe>{descricaodetalhe}</DescricaoDetalhe>
            <div>
              
              <Botao link="https://www.youtube.com/watch?v=Lq2ikAKFv5w">Ver gols</Botao>
              <Botao link="https://www.google.com/search?q=resultado+final+paulista+2021&sxsrf=ALeKk03zh4Dla32tI51oLUKjd58-kznFtw%3A1626305009694&source=hp&ei=8XHvYPG6J6S55OUPgv2uuAo&iflsig=AINFCbYAAAAAYO-AAY5MaoBJ-1-D7k4aPQZXdIPpVhk4&oq=resultado+final+paulista+2021&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAEEYQ_QE6BAgjECc6CAguELEDEIMBOggIABCxAxCDAToOCC4QsQMQgwEQxwEQowI6CwguELEDEMcBEKMCOgQILhBDOgQIABBDOgcILhCxAxBDOgUIABCxAzoCCAA6BwgAELEDEEM6CggAELEDEIMBEEM6CQgAEEMQRhD9AToECAAQCjoKCAAQsQMQgwEQCjoGCAAQChADOgQIABADOgYIABAWEB5Q_AVYtz1ggD9oAXAAeACAAZkCiAGyIpIBBjAuMjguMpgBAKABAaoBB2d3cy13aXo&sclient=gws-wiz&ved=0ahUKEwix95Wj2uPxAhWkHLkGHYK-C6cQ4dUDCAc&uact=5#sie=m;/g/11nh613m_t;2;/m/0528td;dt;fp;1;;">
                Mais Informações
              </Botao>
            </div>
          </Container>
        </TituloPrincipal>
    </main>
  )
}

export default Destaque;