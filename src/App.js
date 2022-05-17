import React from 'react';
import { AuthProvider } from './context/auth';
import RoutesApp from './routes';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </div>
  );
}

export default App;