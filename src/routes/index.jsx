import React, { useEffect } from 'react';

import Login from '../pages/Login';
import { useAuth } from '../context/auth';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import SideBar from '../components/SideBar';
import { DashBoardStyle, Page } from './styles';
import HostPage from '../pages/Hosts';




const RoutesApp = () => { 
    // const { user } = useAuth()


//   async function loadUser() {
//     const userLocal = localStorage.getItem('@App:user');
//     const data = JSON.parse(userLocal)
//     setUser(data.name)
//     setProfile(data.profile)
//     return data;
//   }

  useEffect(()=> {
    // loadUser()
  }, [])

  return (
    <BrowserRouter>
     <DashBoardStyle>
        <SideBar />
        <Page>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/host" element={<HostPage />} />
            <Route
              path="*"
              element={<Navigate to="/dashboard" replace />}
            />
          </Routes>  
        </Page>
      </DashBoardStyle>  {/* 
      <Routes>
         <Route path="/login" element={<Login />} />
      </Routes>  */}
    {/* {user === undefined ? 
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>  
      :
      <>
      <Routes>
        <Route path="/teste" element={<Login />} />
        <Route path="/teste" element={<Login />} />
        <Route
          path="*"
          element={<Navigate to="/teste" replace />}
        />
      </Routes>
      </>
    } */} 
     
    </BrowserRouter>

  )
}

export default RoutesApp;
