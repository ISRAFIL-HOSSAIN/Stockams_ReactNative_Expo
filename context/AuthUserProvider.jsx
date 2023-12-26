import APICONFIG from "@/api/API";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext } from "react";


const AuthUserContext = createContext();

const AuthUserProvider = ({ children }) => {
  const {
    data: { data: { data: userData = {} } = {} } = {},
    isLoading: userLoading,
    refetch: userRefetch,
  } = useQuery(["userInfo"], () => APICONFIG("/api/Auth/GetLoggedInUser"), {
    retry: false,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  });

  const userContextValues = {
    // states
    userData,
    userLoading,
    userFound: Boolean(!userLoading && !!userData?.id),
    // methods
    userRefetch,
  };

  return (
    <AuthUserContext.Provider value={userContextValues}>
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuthUserContext = () => useContext(AuthUserContext);

export default AuthUserProvider;
