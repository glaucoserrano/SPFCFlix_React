import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
  color: ${(props)=> props.theme.colors.preto};
  padding: 8px;
  font-family: ${(props)=> props.theme.fonts.regular};;

  :hover {
    color: ${(props)=> props.theme.colors.vermelho};
  }

`;