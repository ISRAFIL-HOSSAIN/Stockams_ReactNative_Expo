import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext } from "react";

const AuthUserContext = createContext();

const AuthUserProvider = ({ children }) => {
  const {
    data: { userData } = {},
    isLoading: userLoading,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ["/api/Authentication/GetLoggedInUser"],
  });

  const userContextValues = {
    // states
    userData,
    userLoading,
    userFound: Boolean(!userLoading && !!userData?.email),
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
