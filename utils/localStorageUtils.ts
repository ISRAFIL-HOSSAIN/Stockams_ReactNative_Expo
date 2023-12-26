import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthTokens {
  accessToken?: string;
  refreshToken?: string;
}

// Get access token from AsyncStorage
export const getAccessToken = async (): Promise<string | null> => {
  try {
    const data = await AsyncStorage.getItem('__auth_tokens');
    const state: AuthTokens = JSON.parse(data || '{}');
    return state.accessToken || null;
  } catch (error) {
    console.error('Error getting access token:', error);
    return null;
  }
};

// Set access token to AsyncStorage
export const setAccessToken = async (accessToken: string): Promise<void> => {
  try {
    if (accessToken) {
      const data = await AsyncStorage.getItem('__auth_tokens');
      const state: AuthTokens = JSON.parse(data || '{}');
      const newState: AuthTokens = { ...state, accessToken };
      await AsyncStorage.setItem('__auth_tokens', JSON.stringify(newState));
    }
  } catch (error) {
    console.error('Error setting access token:', error);
  }
};

// Get refresh token from AsyncStorage
export const getRefreshToken = async (): Promise<string | null> => {
  try {
    const data = await AsyncStorage.getItem('__auth_tokens');
    const state: AuthTokens = JSON.parse(data || '{}');
    return state.refreshToken || null;
  } catch (error) {
    console.error('Error getting refresh token:', error);
    return null;
  }
};

// Set refresh token to AsyncStorage
export const setRefreshToken = async (refreshToken: string): Promise<void> => {
  try {
    if (refreshToken) {
      const data = await AsyncStorage.getItem('__auth_tokens');
      const state: AuthTokens = JSON.parse(data || '{}');
      const newState: AuthTokens = { ...state, refreshToken };
      await AsyncStorage.setItem('__auth_tokens', JSON.stringify(newState));
    }
  } catch (error) {
    console.error('Error setting refresh token:', error);
  }
};

// Remove access token and refresh token from AsyncStorage
export const removeTokens = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem('__auth_tokens', JSON.stringify({}));
  } catch (error) {
    console.error('Error removing tokens:', error);
  }
};
