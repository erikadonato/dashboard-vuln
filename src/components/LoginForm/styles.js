import styled from 'styled-components';

import MTypography from '@mui/material/Typography';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ alignItems }) => alignItems ? alignItems : 'center'};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'space-between'};
  height: 70%;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
  border-radius: 15px;
  background: #000;
  padding: 1%;
  @media screen and (max-width: 790px){
    width: 100%;
    height: 100vh;
  }
  @media screen and (max-width: 600px){
    flex-direction: column;
    padding: 0;
  }

`;

export const WelcomeSession = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 80%;
  @media screen and (max-width: 790px){
    width: 30%;
  }
  @media screen and (max-width: 740px){
    width: 20%;
  }
  @media screen and (max-width: 600px){
    display: none;
  }
`

export const LoginSession = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 68%;
  height: 98%;
  border-radius: 15px;
  background: rgba(100, 100, 100, 0.2);
  @media screen and (max-width: 740px){
    width: 80%;
  }
  @media screen and (max-width: 600px){
    width: 100%;
    height: 100vh;
    border: none;
  }
`

export const Form = styled.form`
  flex: ${({ flex }) => flex ? flex : 1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-height: 60%;
`;

export const Image = styled.img`
  flex: ${({ flex }) => flex ? flex : 1};
  width: 100%;
`;

export const Title = styled.div`
  flex: ${({ flex }) => flex ? flex : 1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  max-height: 20%;
  `;

export const Typography = styled(MTypography)`
  color: #fff;
`;
