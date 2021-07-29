import styled from 'styled-components';

export const Botao = styled.button`
  margin-top: 16px;
  margin-right: 16px;
  background-color: rgba(${(props) => props.theme.colors.rgbaVermelho},.30);
  border: none;
  border-radius: 16px;
  padding: 16px 16px;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.regular};
  cursor: pointer;
  transition: none.3s ease all;
  color: ${(props) => props.theme.colors.branco};

  :hover{
    background-color: rgba(${(props) => props.theme.colors.rgbaPreto},.30);
  }
`;
