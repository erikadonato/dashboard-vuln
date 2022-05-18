import React, {
    useState,
    createContext,
    useContext,
    useEffect
} from 'react';
  
import api from '../services/api';


const AuthContext = createContext({});
  
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null)

    useEffect(() => {
        const storagedToken = localStorage.getItem('@App:token');
        if(storagedToken) {
            setUser(true)
            setToken(storagedToken);
            api.defaults.headers.Authorization = `Token ${storagedToken}`;
        }
    }, []);

    async function signIn(username, password) {
        try {
            const response = await api.post('/api-token-auth/', {
                username: username,
                password: password,
            })
    
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
            localStorage.setItem('@App:token', response.data.token);
            setUser(true)

        return response.data.token; 

        } catch(error) {
        return false;
        }
    }

    function signOut() {
        setUser(null);
        localStorage.removeItem('@App:user');
        localStorage.removeItem('@App:token');
    }

return (
    <AuthContext.Provider value={{ signed: Boolean(user), token, signIn, signOut }}>
    {children}
    </AuthContext.Provider>
)};
  
export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export default AuthContext;
