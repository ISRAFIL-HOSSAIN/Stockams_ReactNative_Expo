import AsyncStorage from "@react-native-async-storage/async-storage";

interface AccessToken {
  token: string;
}
interface RefreshToken {
  token: string;
}

interface ErrorResponse {
  // Define the structure of your error response
  message: string;
}

export const setAccessToken = async (token: string): Promise<void> => {
  try {
    // const data: AccessToken = { token };
    // const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem("accessToken", token);
    console.log("ACCESS TOKEN SAVE : ", token);
  } catch (error) {
    console.error({ error });
    const errorResponse: ErrorResponse = {
      message: "Error setting access token",
    };

    throw errorResponse;
  }
};

export const getAccessToken = async (): Promise<string > => {
  try {
    // const userData = await AsyncStorage.getItem("accessToken");
    const jsonValue = await AsyncStorage.getItem("accessToken");
    return  jsonValue ?? "";
  } catch (error) {
    // console.error({ error });
    // Handle the error and return an ErrorResponse
    const errorResponse: ErrorResponse = {
      message: "Error retrieving access token",
      // Include additional properties based on your error handling needs
    };

    throw errorResponse;
  }
};

export const setRefreshToken = async (token: string): Promise<void> => {
  try {
    // const data: RefreshToken = { token };
    // const jsonData = JSON.stringify(data);
    
    await AsyncStorage.setItem("refreshToken", token);
    console.log("Refresh TOken SAVE  )))))))>",token)
  } catch (error) {
    console.error({ error });
    const errorResponse: ErrorResponse = {
      message: "Error setting refresh token",
    };

    throw errorResponse;
  }
};

export const getRefreshToken = async (): Promise<string> => {
  try {
    const jsonValue = await AsyncStorage.getItem("refreshToken");
    return jsonValue ?? "";
  } catch (error) {
    // Handle the error and return an ErrorResponse
    const errorResponse: ErrorResponse = {
      message: "Error retrieving access token",
      // Include additional properties based on your error handling needs
    };

    throw errorResponse;
  }
};

export const removeTokens = async (): Promise<void> => {
  try {
    await AsyncStorage.multiRemove(["accessToken", "refreshToken"]);
  } catch (error) {
    console.error("Error removing tokens:", error);
  }
};
