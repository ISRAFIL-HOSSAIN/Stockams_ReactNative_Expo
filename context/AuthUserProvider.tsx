import React, { createContext, useContext, ReactNode } from "react";
import { useQuery, UseQueryResult, RefetchOptions } from "@tanstack/react-query";


interface UserData {
  id?: number;
  // Add other properties as needed
}

interface UserContextValues {
  userData: UserData;
  userLoading: boolean;
  userFound: boolean;
  userRefetch: (options?: RefetchOptions) => Promise<void>;
}

const AuthUserContext = createContext<UserContextValues | undefined>(undefined);

interface AuthUserProviderProps {
  children: ReactNode;
}

const AuthUserProvider: React.FC<AuthUserProviderProps> = ({ children }) => {
  const {
    data: userData,
    isLoading: userLoading,
    refetch: userRefetch,
  }: UseQueryResult<UserData> = useQuery({queryKey:["/api/Auth/GetLoggedInUser"]});

  const userRefetchHandler = async (options?: RefetchOptions): Promise<void> => {
    try {
      await userRefetch(options);
    } catch (error) {
      console.error("Refetch error:", error);
      // Handle the error if needed
    }
  };

  const userContextValues: UserContextValues = {
    // states
    userData: userData || {}, // Ensure userData is not undefined
    userLoading,
    userFound: Boolean(!userLoading && userData?.id !== undefined),
    // methods
    userRefetch: userRefetchHandler,
  };

  return (
    <AuthUserContext.Provider value={userContextValues}>
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuthUserContext = (): UserContextValues => {
  const context = useContext(AuthUserContext);
  if (!context) {
    throw new Error("useAuthUserContext must be used within an AuthUserProvider");
  }
  return context;
};

export default AuthUserProvider;
