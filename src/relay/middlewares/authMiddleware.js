import { getTokens } from '../../helpers/credentails';

export default request => async () => {
  const tokens = await getTokens();

  if (!tokens) {
    return request;
  }

  request.headers.Authorization = `Bearer ${tokens.accessToken}`;

  return request;
};
