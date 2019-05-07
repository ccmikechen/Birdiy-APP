import { AsyncStorage } from 'react-native';
import jwtDecode from 'jwt-decode';

import { handleErrors } from '../errors';
import RefreshSessionMutation from '../mutations/RefreshSessionMutation';

export const setTokens = (accessToken, refreshToken) => (
  AsyncStorage.setItem('tokens', JSON.stringify({
    accessToken,
    refreshToken,
  }))
);

export const clearTokens = () => (
  AsyncStorage.setItem('tokens', '')
);

const isTokenExpired = (token, gap = 0) => {
  const { exp } = jwtDecode(token);
  const now = Date.now() / 1000;

  return (exp - now) <= gap;
};

export const getTokens = async () => {
  const tokensJson = await AsyncStorage.getItem('tokens');

  if (!tokensJson) {
    return null;
  }

  const { accessToken, refreshToken } = JSON.parse(tokensJson);
  const isAccessTokenExpired = isTokenExpired(accessToken, 60);
  const isRefreshTokenExpired = isTokenExpired(refreshToken, 3600);

  if (isAccessTokenExpired) {
    if (isRefreshTokenExpired) {
      await clearTokens();
      return null;
    }

    try {
      const { response } = await new RefreshSessionMutation(refreshToken).commit();
      const { refreshSession: { accessToken: newAccessToken } } = response;
      await setTokens(newAccessToken, refreshToken);
      return { accessToken: newAccessToken, refreshToken };
    } catch (e) {
      handleErrors(e);
    }
  }

  return { accessToken, refreshToken };
};

export const isLoggedIn = async (real = false) => {
  if (real) {
    const tokens = await getTokens();

    return !!tokens;
  }

  const tokensJson = await AsyncStorage.getItem('tokens');

  if (!tokensJson) {
    return null;
  }

  const { accessToken, refreshToken } = JSON.parse(tokensJson);
  const isAccessTokenExpired = isTokenExpired(accessToken, 60);
  const isRefreshTokenExpired = isTokenExpired(refreshToken, 3600);

  return !(isAccessTokenExpired && isRefreshTokenExpired);
};
