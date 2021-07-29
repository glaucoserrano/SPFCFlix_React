import {Container, Logo, Nav } from "./styles";
import { Menu} from '../../components';


const HeaderMain = ({logoImg,Titulos}) =>{
  return(  
    <header>
      <Container >
        <Logo src={logoImg} alt="Símbolo SPFC"/>
        <Nav>
          {Titulos.map((titulo, key) => (
            <Menu 
            key = {key}
            title={titulo} />
          ))}
        </Nav>
      </Container>
    </header>
  );
}

export default HeaderMain;