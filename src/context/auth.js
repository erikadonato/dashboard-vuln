import React, {
    useState,
    createContext,
    useContext,
    useEffect
} from 'react';
  
import api from '../services/api';
import jwt_decode from "jwt-decode";
import moment from 'moment';


const AuthContext = createContext({});
  
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');
        if (storagedToken && storagedUser) {
            setUser(JSON.parse(storagedUser));
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
        }, []);

        async function signIn(username, password) {
        try {
        const response = await api.get('/api-auth/login/', {
            username: username,
            password: password,
        }).then(response => console.log(response.data));
    
    // setProfile(response.data.profile)
    // setUser(response.data);
    // console.log(response.data)
    
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    localStorage.setItem('@App:user', JSON.stringify(response.data.user));
    localStorage.setItem('@App:token', response.data.token);

    return response.data;
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
    <AuthContext.Provider value={{ signed: Boolean(user), user, signIn, signOut }}>
    {children}
    </AuthContext.Provider>
)};
  
export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}
const token = localStorage.getItem("@App:token")

    if(token){
    const decode = jwt_decode(token)

    const {exp} = decode

    const unixTimestamp = new Date(exp*1000);
    const expiredDateFormatted = moment(unixTimestamp).format()
    const dateCurrent = moment().format()

    if(dateCurrent > expiredDateFormatted){
      localStorage.removeItem("@App:token")
      localStorage.removeItem("@App:user")
    }
    }
export default AuthContext;
