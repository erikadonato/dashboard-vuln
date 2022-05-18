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

const PrivateRoutes = () => {
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
            </DashBoardStyle> 
        </BrowserRouter>
    )
}

export default PrivateRoutes;