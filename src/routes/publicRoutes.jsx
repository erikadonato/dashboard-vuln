import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
  
import Login from '../pages/Login';

const publicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                path="*"
                element={<Navigate to="/login" replace />}
                />
            </Routes>
     </BrowserRouter>
    )
}

export default publicRoutes