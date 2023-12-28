// import {createContext,useContext,useEffect,useState} from 'react';
// import axios from 'axios';
// import * as SecureStore from 'expo-secure-store'; 

// import { APIENDPOINTS } from '@/api/apiendpoints';

// interface AuthProps{
//     authState?:{token: string | null; authenticated: boolean | null;}
//     onRegister?: (email:string, password: string) => Promise<any>; 
//     onLogin?: (email:string,password: string)=> Promise<any>; 
//     onLogout?: ()=> Promise<any>;
// }

// const TOKEN_KEY = 'my-jwt'; 
// const AuthContext = createContext<AuthProps>({});

// export const useAuth = ()=>{
//     return useContext(AuthContext);
// }

// export const AuthProvider = ({children}: any) =>{
//     const [authState,setAuthState] = useState<{
//         token: string  | null; 
//         authenticated : boolean | null; 
//     }>({
//         token : null,
//         authenticated: null
//     });
    
//     const register = async (email: string, password: string ) =>{
//         try{
//             return await API.post(APIENDPOINTS.SignUp,{ email, password})
//         }
//         catch(e){
//             return { error: true, msg: ( e as any).response.data.msg};
//         }
//     }
//     const value = {}; 

//     return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
// }
