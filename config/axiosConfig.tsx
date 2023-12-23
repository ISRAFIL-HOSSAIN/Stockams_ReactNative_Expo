import axios from "axios";
import {baseUrl} from "./baseUrl"; 


export const API = axios.create({
    
    baseURL : baseUrl.information, 
    headers: {
        'Content-Type' : 'application/json', 
        Authorization: `Bearer ${("token")}`,
    }
})

export const FAPI = axios.create({
    baseURL : baseUrl.information, 
    headers:{
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${("token")}`,
    }
})