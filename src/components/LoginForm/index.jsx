import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import TextField from '../../components/TextField';
import Button from '../../components/Button';

import Logo from '../../assets/loginIcon.png';

import {
  Container,
  Form,
  Image,
  Title,
  WelcomeSession,
  LoginSession
} from './styles';

import { Typography } from '../Typography/styles';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const context = useAuth();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameHasError, setUsernameHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);

  const handleClickShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const notify = (errorMessage) => toast.error(errorMessage);

  const handleLogin = async (e) => {
    e.preventDefault()

    if(!!username) {
      setUsernameHasError(false);
      if(!!password) {
        setPasswordHasError(false);
        const isLoggedIn = await context.signIn(username, password);
        if(isLoggedIn) {
          <Navigate to="/dashboard" />
        } else {
          setUsernameHasError(true);
          setPasswordHasError(true);
          notify('Usuário ou senha incorretos')
        }
      } else {
        setPasswordHasError(true)
        notify('Campo senha não pode ser vazio')
      }
    } else {
      setUsernameHasError(true);
      notify('Campo usuário não pode ser vazio')
    }
  }
  return (
    <Container>
      <WelcomeSession>
        <Image src={Logo} />
      </WelcomeSession>
      <LoginSession>
        
        <Title flex={2}>
          <Typography variant="h5">
            Dashboard de vulnerabilidade
          </Typography>
          <Typography variant="subtitle1">
            Digite seus dados para acessar o painel.
          </Typography>
        </Title>
        <Form onSubmit={handleLogin} flex={4}>
          <TextField
            label="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={usernameHasError}
            required={true}
          />
          <TextField
            label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordHasError}
            type={isPasswordVisible ? 'text' : 'password'}
            required={true}
            endIcon={
                <IconButton
                  style={{color: "#FFF"}}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {isPasswordVisible? <VisibilityOff /> : <Visibility />}
                </IconButton>
            }
          />
          <Button /*onClick={handleLogin}*/ type="submit">Entrar</Button>
        </Form>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        
      </LoginSession>
    </Container>
  )
}

export default LoginForm;
