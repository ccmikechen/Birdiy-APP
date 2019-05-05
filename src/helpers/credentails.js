import { AsyncStorage } from 'react-native';

export const setTokens = (accessToken, refreshToken) => (
  AsyncStorage.setItem('tokens', JSON.stringify({
    accessToken,
    refreshToken,
  }))
);

export const clearTokens = () => (
  AsyncStorage.setItem('tokens', '')
);

export const getTokens = async () => {
  const tokensJson = await AsyncStorage.getItem('tokens');

  return JSON.parse(tokensJson);
};
