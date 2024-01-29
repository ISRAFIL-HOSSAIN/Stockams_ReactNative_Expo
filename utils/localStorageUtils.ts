import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthTokens {
  accessToken?: string;
  refreshToken?: string;
}

const getToken = async (tokenType: string): Promise<string | null> => {
  try {
    const data = await AsyncStorage.getItem(tokenType);
    return data || null;
  } catch (error) {
    console.error(`Error getting ${tokenType} token:`, error);
    return null;
  }
};

const setToken = async (tokenType: string, token: string): Promise<void> => {
  try {
    if (token) {
      await AsyncStorage.setItem(tokenType, token);
    }
  } catch (error) {
    console.error(`Error setting ${tokenType} token:`, error);
  }
};

export const getAccessToken = async (): Promise<string | null> =>
  getToken('accessToken');

export const setAccessToken = async (accessToken: string): Promise<void> =>
  setToken('accessToken', accessToken);

export const getRefreshToken = async (): Promise<string | null> =>
  getToken('refreshToken');

export const setRefreshToken = async (refreshToken: string): Promise<void> =>
  setToken('refreshToken', refreshToken);

export const removeTokens = async (): Promise<void> => {
  try {
    await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
  } catch (error) {
    console.error('Error removing tokens:', error);
  }
};
