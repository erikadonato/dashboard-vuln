import React from 'react';
import api from '../services/api';
import PrivateRoutes from './privateRoutes'
import PublicRoutes from './publicRoutes';

const RoutesApp = () => { 

  const token = localStorage.getItem('@App:token')
  api.defaults.headers.Authorization = `Token ${token}`;

  if(token) {
    return <PrivateRoutes />
  } else {
    return <PublicRoutes />
  }
}

export default RoutesApp;
