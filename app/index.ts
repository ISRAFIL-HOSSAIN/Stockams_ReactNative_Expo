
import React,{useEffect} from 'react';
import { useRootNavigationState } from "expo-router";
import { useRouter, useSegments } from "expo-router";
import { useAuthUserContext } from '@/context/AuthUserProvider';


export default function Indexd (){
    const segments = useSegments();
    const router = useRouter(); 
    const navigationState = useRootNavigationState();
    const { userFound } = useAuthUserContext();
    useEffect(()=>{
        if(!navigationState?.key) return; 

        const inAuthGroup = segments[0] === "(modals)"; 
        if(
            !userFound && !inAuthGroup
        ){
            router.replace("/login")
        }
        else if(userFound){
            router.replace("/")
        }
    },[userFound,segments,navigationState?.key]);
    
    // if(!navigationState?.key){
    //     return null;
    // }
    
};