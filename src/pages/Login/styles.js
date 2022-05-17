import styled from 'styled-components';

export const Column = styled.div`
  flex: ${({ flex }) => flex ? flex : 1 };
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  @media (max-width: 900px) {
    display: ${({ display }) => display ? display : '' };
  }
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #ecf0f1;
`;
