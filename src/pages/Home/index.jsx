import { Header,Destaque } from "../../components";
import Dados from '../../Dados.json'

const Home = () =>{
  return(
    <>
      <Header 
        logoImg ={Dados.Logo}
        Titulos = {Dados.Titulos}/>
      <Destaque 
        titulo={Dados.Destaque.Titulo}
        descricao={Dados.Destaque.Descricao}  
        descricaodetalhe={Dados.Destaque.Detalhe}
      />
    </>
  );
}

export default Home;