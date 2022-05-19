import React from 'react';

import {
  Column,
  Page
} from './styles';

import LoginForm from '../../components/LoginForm';

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
