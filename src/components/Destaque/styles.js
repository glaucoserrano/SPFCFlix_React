import styled from 'styled-components';


export const Container = styled.div`
  margin-left: 24px;
`;

export const TituloPrincipal = styled.div`
  font-size: 16px;
  background: linear-gradient(rgba(${(props) => props.theme.colors.rgbaPreto},.50),rgba(${(props) => props.theme.colors.rgbaPreto},.80)100%), url(${(props) => props.theme.image.destaque}) no-repeat;
  height: 72vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
`;

export const Titulo = styled.h3`
  margin-top: 20%;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.branco};
  font-size: 32px;
  margin-bottom: 40px;
  
`;

export const Descricao = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  color: ${(props) => props.theme.colors.branco};
  padding: 8px;
  
`;

export const DescricaoDetalhe = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  color: ${(props) => props.theme.colors.branco};
  padding: 8px;
  
`;