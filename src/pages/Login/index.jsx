import React from 'react';

import {
  Column,
  Image,
  Page
} from './styles';


import LoginForm from '../../components/LoginForm';

// import SideImage from '../../assets/dpec_vinhos.jpeg';

const Login = () => {
  return (
    <Page>
        <Column flex={7}>
          <LoginForm />
        </Column>
    </Page>
  )
}

export default Login;
