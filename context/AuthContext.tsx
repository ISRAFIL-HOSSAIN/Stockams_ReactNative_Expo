import {createContext,useContext,useEffect,useState} from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store'; 

interface AuthProps{
    authState?:{token: string | null; authenticated: bo}
}